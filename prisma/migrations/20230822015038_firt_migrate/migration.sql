-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "pessoas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
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
    "nasceuLarCritao" BOOLEAN,
    "batizadoEspirito" BOOLEAN,
    "batizadoNaAgua" BOOLEAN,
    "observacao" TEXT,
    "igrejaId" TEXT,
    CONSTRAINT "pessoas_igrejaId_fkey" FOREIGN KEY ("igrejaId") REFERENCES "igreja" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "familiares" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "estadoCivil" TEXT NOT NULL,
    "nomeConjugue" TEXT,
    "DataCasamento" TEXT,
    "evangelico" BOOLEAN NOT NULL,
    "filhos" BOOLEAN NOT NULL,
    "quantos" INTEGER
);

-- CreateTable
CREATE TABLE "igreja" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'Assembleia de Deus Rios de Águas Vivas',
    "cargo" TEXT NOT NULL DEFAULT 'Membro'
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
