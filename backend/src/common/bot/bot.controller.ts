import {
  Controller,
  Post,
  Body,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from "@nestjs/common";
import { InjectDiscordClient } from "@discord-nestjs/core";
import { Client, TextChannel } from "discord.js";
import { ProposalService } from "src/common/proposal/proposal.service";
import { Bot } from "./bot.model";
import { BotService } from "./bot.service";
import { CreateBotDto } from "./dto";

@Controller("bot")
export class BotController {
  constructor(
    @InjectDiscordClient()
    private readonly client: Client,
    private readonly botService: BotService,
    private readonly proposalService: ProposalService
  ) {}

  @Post("/depostit")
  async depositLink(@Body() depositPayload): Promise<any> {
    const bot = await this.botService.findOne({ groupAddress: depositPayload.groupAddress });
    if (!bot) throw new HttpException("BOT NOT FOUND", HttpStatus.NOT_FOUND);
    if (bot.status !== "activated")
      throw new HttpException("BOT NOT ACTIVATED", HttpStatus.BAD_REQUEST);

    const messageComponent = {
      type: 1,
      components: [
        {
          style: 5,
          label: `Add deposit `,
          url: `${depositPayload.redirectUrl}`,
          disabled: false,
          emoji: {
            id: null,
            name: `💵`,
          },
          type: 2,
        },
      ],
    };

    const messageEmbed = {
      type: "rich",
      title: `DEPOSIT OPEN`,
      description: `A group wallet has been created you can now proccess to the deposit in USDC`,
      color: 0x0099ff,
    };

    const channel = await this.client.channels.fetch(bot.channelId.toString());
    (channel as TextChannel).send({ components: [messageComponent], embeds: [messageEmbed] });
    return bot;
  }

  @Post("/proposal")
  async createProposal(@Body() proposalPayload): Promise<any> {
    const bot = await this.botService.findOne({ groupAddress: proposalPayload.groupAddress });
    if (!bot) throw new HttpException("BOT NOT FOUND", HttpStatus.NOT_FOUND);
    if (bot.status !== "activated")
      throw new HttpException("BOT NOT ACTIVATED", HttpStatus.BAD_REQUEST);

    const messageEmbed = {
      type: "rich",
      title: proposalPayload.title,
      description: proposalPayload.description,
      color: 0x0099ff,
      image: {
        url: proposalPayload.image,
        height: 0,
        width: 0,
      },
    };
    const channel = await this.client.channels.fetch(bot.channelId.toString());
    const message = await (channel as TextChannel).send({ embeds: [messageEmbed] });
    await message.react("👍");

    const proposal = await this.proposalService.create({
      groupAddress: bot.groupAddress,
      messageId: message.id,
      title: proposalPayload.title,
      description: proposalPayload.description,
      url: proposalPayload.url,
      image: proposalPayload.image,
      status: "pending",
      transactionHash: proposalPayload.transactionHash,
    });
    this.botService.handleVote(bot, message, { time: proposalPayload.time });

    return proposal
  }

  @Post()
  async create(@Body() botPayload: CreateBotDto): Promise<Bot> {
    return this.botService.create(botPayload);
  }

  @Get()
  async findAll(@Query() query): Promise<Bot[]> {
    return this.botService.findAll(query);
  }
}
