import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { Like } from './entities/like.entity';
import { Trip } from 'src/parcours-sauvegarder/entities/parcours-sauvegarder.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Like, Trip, User])],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
