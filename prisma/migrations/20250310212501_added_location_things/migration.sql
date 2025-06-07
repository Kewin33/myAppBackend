-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "date" TIMESTAMP(3),
ADD COLUMN     "location" TEXT;
