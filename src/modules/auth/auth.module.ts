import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { JwtAuthService } from '../jwt/jwt.service';
import { JwtAuthModule } from '../jwt/jwt.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtAuthService],
  exports: [AuthService],
  imports:[UserModule, JwtAuthModule]
})
export class AuthModule {}
