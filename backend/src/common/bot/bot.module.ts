import { Module } from "@nestjs/common";
import { BotGateway } from "./bot.gateway";
import { DiscordModule } from "@discord-nestjs/core";
import { GroupModule } from "src/common/group/group.module";
import { BotController } from "./bot.controller";
import { BotService } from "./bot.service";
import { ProposalModule } from "src/common/proposal/proposal.module";
import { MongooseModule } from "@nestjs/mongoose";
import { BotSchema } from "./bot.model";
import { GnosisModule } from "src/common/gnosis/gnosis.module";
import { SendAssetCommand } from "src/common/bot/commands/sendAsset.command";

@Module({
  providers: [BotGateway, BotService, SendAssetCommand],
  imports: [
    DiscordModule.forFeature(),
    GroupModule,
    ProposalModule,
    GnosisModule,
    MongooseModule.forFeature([{ name: "Bot", schema: BotSchema }]),
  ],
  controllers: [BotController],
})
export class BotModule {}
