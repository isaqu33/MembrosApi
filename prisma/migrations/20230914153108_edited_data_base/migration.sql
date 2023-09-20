/*
  Warnings:

  - You are about to drop the `familiares` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `cargo` on the `igreja` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pessoas" ADD COLUMN "familyId" TEXT;
ALTER TABLE "pessoas" ADD COLUMN "photoUrl" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "familiares";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cargoId" INTEGER,
    "igrejaId" TEXT,
    CONSTRAINT "User_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_igrejaId_fkey" FOREIGN KEY ("igrejaId") REFERENCES "igreja" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_igreja" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'Assembleia de Deus Rios de Águas Vivas'
);
INSERT INTO "new_igreja" ("id", "name") SELECT "id", "name" FROM "igreja";
DROP TABLE "igreja";
ALTER TABLE "new_igreja" RENAME TO "igreja";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
