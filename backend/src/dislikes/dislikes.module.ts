import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DislikesService } from './dislikes.service';
import { DislikesController } from './dislikes.controller';
import { Dislike } from './entities/dislike.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dislike])],
  controllers: [DislikesController],
  providers: [DislikesService],
})
export class DislikesModule {}
