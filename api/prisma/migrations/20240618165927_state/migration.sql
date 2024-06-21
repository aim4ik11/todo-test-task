/*
  Warnings:

  - The `state` column on the `TodoTask` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "State" AS ENUM ('NEW', 'IN_PROGRESS', 'DONE');

-- AlterTable
ALTER TABLE "TodoTask" DROP COLUMN "state",
ADD COLUMN     "state" "State" NOT NULL DEFAULT 'NEW';

-- DropEnum
DROP TYPE "Status";
