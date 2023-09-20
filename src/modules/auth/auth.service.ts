import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthService {

  constructor(private userservice: UserService) { }


  async validarUsuario(email: string): Promise<any> {
    const user = await this.userservice.findOne(email)

    if (user) {

      const { id, name, email } = user;
      return { id, name, email }
    }

    return null

  }
}
