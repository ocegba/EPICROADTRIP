import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

import { ParcoursSauvegarderModule } from './parcours-sauvegarder/parcours-sauvegarder.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ParcoursSauvegarderModule,
    LikesModule,

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
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
