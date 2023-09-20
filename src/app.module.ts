import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PessoasModule } from './modules/pessoas/pessoas.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './modules/prisma/prisma.service';
import { UserService } from './modules/user/user.service';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [UserModule, PessoasModule, AuthModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService,PrismaService,UserService],
})
export class AppModule {}
