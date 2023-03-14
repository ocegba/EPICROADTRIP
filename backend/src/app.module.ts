import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { ParcoursSauvegarderModule } from './parcours-sauvegarder/parcours-sauvegarder.module';
import { LikesModule } from './likes/likes.module';
import { DislikesModule } from './dislikes/dislikes.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ert-mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'EpicRoadTrip',
      entities: [],
      synchronize: true,
    }),
    RolesModule,
    UsersModule,
    ParcoursSauvegarderModule,
    LikesModule,
    DislikesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
