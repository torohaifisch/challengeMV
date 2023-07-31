-- CreateTable
CREATE TABLE "task" (
    "taskId" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "totalTasks" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("taskId")
);

-- CreateTable
CREATE TABLE "taskState" (
    "taskStateId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "taskState_pkey" PRIMARY KEY ("taskStateId")
);
