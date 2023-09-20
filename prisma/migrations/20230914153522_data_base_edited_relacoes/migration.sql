/*
  Warnings:

  - Made the column `cargoId` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `igrejaId` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cargoId` on table `pessoas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `igrejaId` on table `pessoas` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,
    "igrejaId" TEXT NOT NULL,
    CONSTRAINT "User_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_igrejaId_fkey" FOREIGN KEY ("igrejaId") REFERENCES "igreja" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("cargoId", "email", "id", "igrejaId", "name", "password") SELECT "cargoId", "email", "id", "igrejaId", "name", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_pessoas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "photoUrl" TEXT,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "escolaridade" TEXT,
    "pai" TEXT,
    "mae" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profissao" TEXT,
    "familyId" TEXT,
    "nasceuLarCritao" BOOLEAN,
    "batizadoEspirito" BOOLEAN,
    "batizadoNaAgua" BOOLEAN,
    "observacao" TEXT,
    "igrejaId" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,
    CONSTRAINT "pessoas_igrejaId_fkey" FOREIGN KEY ("igrejaId") REFERENCES "igreja" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pessoas_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pessoas" ("bairro", "batizadoEspirito", "batizadoNaAgua", "cargoId", "cep", "cidade", "cpf", "email", "endereco", "escolaridade", "familyId", "id", "igrejaId", "mae", "nasceuLarCritao", "nascimento", "nome", "observacao", "pai", "photoUrl", "profissao", "tel", "uf") SELECT "bairro", "batizadoEspirito", "batizadoNaAgua", "cargoId", "cep", "cidade", "cpf", "email", "endereco", "escolaridade", "familyId", "id", "igrejaId", "mae", "nasceuLarCritao", "nascimento", "nome", "observacao", "pai", "photoUrl", "profissao", "tel", "uf" FROM "pessoas";
DROP TABLE "pessoas";
ALTER TABLE "new_pessoas" RENAME TO "pessoas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
