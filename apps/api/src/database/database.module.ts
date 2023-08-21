import { Module } from '@nestjs/common';
import { databaseProviders, DATABASE_KEY } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [DATABASE_KEY],
})
export class DatabaseModule {}
