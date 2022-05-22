import { TransformPipe } from "@discord-nestjs/common";
import {
  Command,
  DiscordTransformedCommand,
  Payload,
  InjectDiscordClient,
  On,
  UseGuards,
  TransformedCommandExecutionContext,
  UsePipes,
} from "@discord-nestjs/core";
const { Modal, TextInputComponent, showModal } = require("discord-modals"); // Now we extract the showModal method
const discordModals = require("discord-modals"); // Now we extract the showModal method
import { Client } from "discord.js";
import { Injectable } from "@nestjs/common";
import { PlayDto } from "../dto/play.dto";
@Injectable()
@Command({
  name: "send",
  description: "send token to wallet",
})
@UsePipes(TransformPipe)
export class SendAssetCommand implements DiscordTransformedCommand<PlayDto> {
  modalId: string = "send-modal";
  assetInputId: string = "asset-input";
  quantityInputId: string = "quantity-input";
  addressInputId: string = "address-input";

  constructor(
    @InjectDiscordClient()
    private readonly client: Client
  ) {
    discordModals(this.client);
  }
  async handler(
    @Payload() dto: PlayDto,
    { interaction }: TransformedCommandExecutionContext
  ): Promise<void> {
    const modal = new Modal() // We create a Modal
      .setCustomId(this.modalId)
      .setTitle("Send to ")
      .addComponents(
        new TextInputComponent() // We create an Text Input Component
          .setCustomId(this.addressInputId)
          .setLabel("public address")
          .setStyle("SHORT") //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
          .setPlaceholder("public address (0x)")
          .setRequired(true) // If it's required or not
      )

      .addComponents(
        new TextInputComponent() // We create an Text Input Component
          .setCustomId(this.assetInputId)
          .setLabel("Choose an asset (ETH, DAI)")
          .setStyle("SHORT") //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
          .setPlaceholder("ETH")
          .setRequired(true) // If it's required or not
      )

      .addComponents(
        new TextInputComponent() // We create an Text Input Component
          .setCustomId(this.quantityInputId)
          .setLabel("Amount")
          .setStyle("SHORT") //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
          .setPlaceholder("10")
          .setRequired(true) // If it's required or not
      );

    await showModal(modal, {
      client: this.client, // Client to show the Modal through the Discord API.
      interaction: interaction, // Show the modal with interaction data.
    });
  }

  @On("modalSubmit")
  async onModalSubmit(interaction) {
    if (interaction.customId != this.modalId) return;
    const asset = interaction.getTextInputValue(this.assetInputId);
    const address = interaction.getTextInputValue(this.addressInputId);
    const quantity = interaction.getTextInputValue(this.quantityInputId);
    await interaction.reply(` your request has been submitted.`);
  }
}
