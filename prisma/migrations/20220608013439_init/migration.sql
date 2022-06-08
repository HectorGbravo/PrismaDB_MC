-- CreateTable
CREATE TABLE "missioncommander" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "missioncommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "missioncommander_name_key" ON "missioncommander"("name");
