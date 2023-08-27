import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { HelloModule } from './hello/hello.module';
import { DatabaseModule } from './database/database.module';
import { ArticlesResolver, ArticlesModule } from './articles';
import { DataloaderModule, DataloaderService } from './graphql-dataloader';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<YogaDriverConfig>({
      driver: YogaDriver,
      useFactory: (dataloaderService: DataloaderService) => ({
        autoSchemaFile: true,
        sortSchema: true,
        context: () => {
          return { dataloader: dataloaderService.create() };
        },
      }),
      imports: [DataloaderModule],
      inject: [DataloaderService],
    }),
    HelloModule,
    DatabaseModule,
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ArticlesResolver],
})
export class AppModule {}
