-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "coffee" TEXT NOT NULL,
    "milk" TEXT NOT NULL,
    "syrup" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false
);
