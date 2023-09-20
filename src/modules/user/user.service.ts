import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) { }

  async findOne(email: string): Promise<User | undefined> {
    return await this.prisma.user.findUnique({
      where: {
        email: email
      }
    })
  }

  async createNewUser(createUserDto: CreateUserDto | any): Promise<any> {

    const defaltRoles = await this.prisma.cargo.findFirst({
      where: {
        name: "ADMIN"
      }
    })
    const defaltChurch = await this.prisma.igreja.findFirst({
      where: {
        name: "Assembleia de Deus Rios de Águas Vivas"
      }
    })

    console.log(defaltRoles)
    console.log(defaltChurch)


    return await this.prisma.user.upsert({
      where: {
        email: createUserDto.email
      },
      create: {

        ...createUserDto,
        igreja: {
          connect: {
            id: defaltChurch.id
          }
        },
        cargo: {
          connect: {
            id: defaltRoles.id
          }
        }

      },
      update: {
        // photoURL: createUserDto.photoURL
      }


    })


  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
