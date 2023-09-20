
import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PessoasService {

  constructor(private Prisma: PrismaService) { }



  async createNewUser(createPessoaDto: CreatePessoaDto): Promise<any> {

    const defaltRoles = await this.Prisma.cargo.findFirst({
      where: {
        name: "ADMIN"
      }
    })
    const defaltChurch = await this.Prisma.igreja.findFirst({
      where: {
        name: "Assembleia de Deus Rios de Águas Vivas"
      }
    })

    const result = await this.Prisma.pessoas.create({

      data: {

        ...createPessoaDto,
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
      // update: {

      //   ...createPessoaDto,
      //   igreja: {
      //     connect: {
      //       id: defaltChurch.id
      //     }
      //   },
      //   cargo: {
      //     connect: {
      //       id: defaltRoles.id
      //     }
      //   }

      // }
    })
    return result
  }

  async findAll() {

    const result = await this.Prisma.pessoas.findMany()

    return result
  }

  findOne(id: number) {
    return `This action returns a #${id} pessoa`;
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return `This action updates a #${id} pessoa`;
  }

  remove(id: number) {
    return `This action removes a #${id} pessoa`;
  }
}
