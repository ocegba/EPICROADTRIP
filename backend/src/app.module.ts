import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { ParcoursSauvegarderModule } from './parcours-sauvegarder/parcours-sauvegarder.module';
import { LikesModule } from './likes/likes.module';
import { DislikesModule } from './dislikes/dislikes.module';
import { User } from './users/entities/user.entity';
import { Role } from './roles/entities/role.entity';
import { ParcoursSauvegarder } from './parcours-sauvegarder/entities/parcours-sauvegarder.entity';
import { Like } from './likes/entities/like.entity';
import { Dislike } from './dislikes/entities/dislike.entity';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    RolesModule,
    ParcoursSauvegarderModule,
    LikesModule,
    DislikesModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'ert-mariadb',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'EpicRoadTrip',
      entities: [User, Role, ParcoursSauvegarder, Like, Dislike],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
