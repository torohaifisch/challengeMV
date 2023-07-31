/*
  Warnings:

  - You are about to drop the `task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `taskState` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "task";

-- DropTable
DROP TABLE "taskState";

-- CreateTable
CREATE TABLE "Task" (
    "taskId" SERIAL NOT NULL,
    "taskStateId" INTEGER NOT NULL,
    "totalTasks" INTEGER NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("taskId")
);

-- CreateTable
CREATE TABLE "TaskState" (
    "taskStateId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TaskState_pkey" PRIMARY KEY ("taskStateId")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskStateId_fkey" FOREIGN KEY ("taskStateId") REFERENCES "TaskState"("taskStateId") ON DELETE RESTRICT ON UPDATE CASCADE;
