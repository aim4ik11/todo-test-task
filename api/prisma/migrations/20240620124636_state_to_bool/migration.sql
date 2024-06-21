/*
  Warnings:

  - The `state` column on the `TodoTask` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "TodoTask" DROP COLUMN "state",
ADD COLUMN     "state" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "State";
