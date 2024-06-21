-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NEW', 'IN_PROGRESS', 'DONE');

-- CreateTable
CREATE TABLE "TodoTask" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" "Status" NOT NULL DEFAULT 'NEW',
    "priority" INTEGER NOT NULL DEFAULT 5,

    CONSTRAINT "TodoTask_pkey" PRIMARY KEY ("id")
);
