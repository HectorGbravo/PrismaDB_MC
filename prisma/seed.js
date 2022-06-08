const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const mc0 = await prisma.missioncommander.upsert({
      where: { name: 'CarloGilmar' },
      update: {},
      create: {
        name: 'CarloGilmar',
				lang: 'English',
                missionCommander: "NodeJs",
				enrollments: 1,
                hasCertification: true,
      },
    });

    const mc1 = await prisma.missioncommander.upsert({
        where: { name: 'Fer8a' },
        update: {},
        create: {
          name: 'Fer8a',
                  lang: 'English',
                  missionCommander: "Onboarding and Java",
                  enrollments: 2,
                  hasCertification: true,
        },
    });

      const mc2 = await prisma.missioncommander.upsert({
        where: { name: 'Romanplas' },
        update: {},
        create: {
          name: 'Romanplas',
                  lang: 'English',
                  missionCommander: "Frontend",
                  enrollments: 1,
                  hasCertification: true,
        },
    });

    console.log('Create 3 MCs');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();