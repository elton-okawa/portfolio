import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { join } from 'path';
import { HelloModule } from './hello/hello.module';
import { DatabaseModule } from './database/database.module';
import { PostsResolver } from './posts';
import { DataloaderModule, DataloaderService } from './graphql-dataloader';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<YogaDriverConfig>({
      driver: YogaDriver,
      useFactory: (dataloaderService: DataloaderService) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
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
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PostsResolver],
})
export class AppModule {}
