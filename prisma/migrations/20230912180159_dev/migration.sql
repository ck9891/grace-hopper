/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "coffee" TEXT NOT NULL,
    "milk" TEXT NOT NULL,
    "syrup" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Order" ("coffee", "complete", "createdAt", "email", "id", "milk", "name", "syrup", "temperature") SELECT "coffee", "complete", "createdAt", "email", "id", "milk", "name", "syrup", "temperature" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
