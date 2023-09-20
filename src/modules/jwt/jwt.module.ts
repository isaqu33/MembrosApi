import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthService } from './jwt.service';
import { JwtAuthStrategy } from './jwt-auth.strategy';
import * as dotenv from 'dotenv'
import { ConfigModule } from '@nestjs/config';

dotenv.config()

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          secret: process.env.SECRET_JWT,
          signOptions: {
            expiresIn: '60d'
          },
        };
      },

    }),
    ConfigModule.forRoot(),
  ],
  providers: [JwtAuthStrategy, JwtAuthService],
  exports: [JwtModule, JwtAuthService],
})
export class JwtAuthModule { }