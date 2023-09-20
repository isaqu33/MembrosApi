import { Module } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PessoasController],
  providers: [PessoasService, PrismaService],
  imports: [PrismaModule]
})
export class PessoasModule { }
