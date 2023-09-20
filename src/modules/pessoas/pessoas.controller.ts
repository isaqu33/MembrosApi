import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { Request, Response } from 'express';


@Controller('pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) { }

  @Post("criarPessoa")
  @UseGuards(JwtAuthGuard)
  async create(@Req() req: Request, @Res() res: Response) {

    const PessoaCriada = await this.pessoasService.createNewUser(req.body as unknown as CreatePessoaDto)


    if (PessoaCriada) {
      return res.status(201).json({ "sucess": "User created" });
    }

    return res.status(401).json({ "error": "User not registed" })
  }


  @Get("todos")
  @UseGuards(JwtAuthGuard)
  findAll() {

    console.log("entrou")
    return this.pessoasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePessoaDto: UpdatePessoaDto) {
    return this.pessoasService.update(+id, updatePessoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoasService.remove(+id);
  }
}
