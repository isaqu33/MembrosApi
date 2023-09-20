-- CreateTable
CREATE TABLE "cargo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pessoas" (
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
    "cargoId" INTEGER,
    CONSTRAINT "pessoas_igrejaId_fkey" FOREIGN KEY ("igrejaId") REFERENCES "igreja" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "pessoas_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_pessoas" ("bairro", "batizadoEspirito", "batizadoNaAgua", "cep", "cidade", "cpf", "email", "endereco", "escolaridade", "id", "igrejaId", "mae", "nasceuLarCritao", "nascimento", "nome", "observacao", "pai", "profissao", "tel", "uf") SELECT "bairro", "batizadoEspirito", "batizadoNaAgua", "cep", "cidade", "cpf", "email", "endereco", "escolaridade", "id", "igrejaId", "mae", "nasceuLarCritao", "nascimento", "nome", "observacao", "pai", "profissao", "tel", "uf" FROM "pessoas";
DROP TABLE "pessoas";
ALTER TABLE "new_pessoas" RENAME TO "pessoas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
