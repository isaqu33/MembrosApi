// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prismaSeed = new PrismaClient()


async function mainIgreja() {

    await prismaSeed.igreja.create({
        data: {

            name: "Assembleia de Deus Rios de Águas Vivas"

        }
    })

}

async function main() {
    const cargo = [{ name: "MEMBRO" }, { name: "OBREIRO" }, { name: 'ADMIN' }]
    await prismaSeed.cargo.create({ data: cargo[0] })
    await prismaSeed.cargo.create({ data: cargo[1] })
    await prismaSeed.cargo.create({ data: cargo[2] })

}

main()