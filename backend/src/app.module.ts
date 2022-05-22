import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from 'src/common/group/group.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MemberModule } from 'src/common/member/member.module';
import { InvitationModule } from 'src/common/invitation/invitation.module';
import { TreasureModule } from 'src/common/treasure/treasure.module';
import { TransactionModule } from 'src/common/transaction/transaction.module';
import { BalanceModule } from 'src/common/balance/balance.module';
import configuration from 'src/config/config';
import { DiscordModule } from '@discord-nestjs/core';
import { DiscordConfigService } from 'src/config/discord-config-service';
import { BotModule } from 'src/common/bot/bot.module';
import { ProposalModule } from 'src/common/proposal/proposal.module';
import { GnosisModule } from 'src/common/gnosis/gnosis.module';

@Module({
  imports: [
    BotModule,
    DiscordModule.forRootAsync({
      useClass: DiscordConfigService,
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    GroupModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@display-cluster.awcah.mongodb.net/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority`),
    MemberModule,
    InvitationModule,
    TreasureModule,
    TransactionModule,
    BalanceModule,
    ProposalModule,
    GnosisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() { }
}
