import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';
import { JwtAuthService } from '../jwt/jwt.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly jwtAuthService: JwtAuthService
  ) { }

  @Post('signin')
  async authLogin(@Req() req: Request, @Res() res: Response) {

    // recebe os dados da request
    const { email, password } = req.body

    console.log(email)
    console.log(password)

    console.log(email & password)


    if (email && password) {
      //APENAS SE O UID EXISTIR NA REQUEST
      console.log("entrou no if de existe senha e email")

      const usuario: any = await this.userService.findOne(email as string)

      if (usuario) {

        const { id, email }: User = usuario
        const user = await this.userService.findOne(email)
        if (user) {
          //APENAS SE O USUARIO EXISTIR NO BANCO DE DADOS
          const sub = id
          const { accessToken } = this.jwtAuthService.login({ sub, username: email });
          return res.json({ accessToken });
        }
      }
      return res.status(401).json({ "error": "User not registed" })

    }

    return res.status(401).json({ "error": "User not found" })
  }



  @Post('signup')
  async authCadastro(@Req() req: Request, @Res() res: Response) {

    // recebe os dados da request
    const { name, email, password } = req.body

    console.log("console do controller auth:")
    console.log(req.body)

    const userInOuerBase = await this.userService.findOne(email)

    if (userInOuerBase) {
      return res.send("usuario já existe !")
    }

    if (name && email && password) {

      const user = await this.userService.createNewUser(
        {
          name,
          email,
          password
        }
      )

      return res.status(201).json({ user });


    }
    return res.status(406)

  }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
