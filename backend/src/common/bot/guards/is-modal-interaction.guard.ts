import { DiscordGuard, EventArgs } from '@discord-nestjs/core';
import { ClientEvents } from 'discord.js';

export class IsModalInteractionGuard implements DiscordGuard {
  canActive(
    event: keyof ClientEvents,
    [interaction],
  ): boolean | Promise<boolean> {
    return event === 'interactionCreate' && interaction.isModalSubmit();
  }
}