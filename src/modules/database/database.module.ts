import { Module } from '@nestjs/common';
import { dataBaseProvider } from './database.provider';

@Module({
  providers: [...dataBaseProvider],
  exports: [...dataBaseProvider]
})

export class DatabaseModule {}