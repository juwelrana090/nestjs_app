import { Module } from '@nestjs/common';
import { UserController } from '@/src/user.controller';
import { AlbumsController } from '@/src/albums.controller';

@Module({
  controllers: [UserController, AlbumsController],
})
export class AppModule { }
