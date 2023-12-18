import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {configManager} from "@common/config/config.manager";
import {TypeOrmModule} from "@nestjs/typeorm";
import {APP_GUARD} from "@nestjs/core";
import {JwtGuard, SecurityModule} from "../security";
import {MemberModule} from "../module";

@Module({
  imports: [TypeOrmModule.forRoot(configManager.getTypeOrmConfig()),MemberModule, SecurityModule],
  controllers: [AppController],
  providers: [AppService, {provide: APP_GUARD, useClass: JwtGuard}]
})
export class AppModule {

}
