const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

app.get('/mc', async (req, res) => {
    const allmc =  await prisma.missioncommander.findMany({});
    res.json(allmc);
  });

app.get('/mc/:id', async (req, res) => {
    const id = req.params.id;
    const missioncommander = await prisma.missioncommander.findUnique({where: {id: parseInt(id)}});
    res.json(missioncommander);
  });

app.post('/mc', async (req, res) => {
    const missioncommander = {
      name: req.body.name,
      lang: req.body.lang,
      missionCommander: req.body.missionCommander,
      enrollments: req.body.enrollments,
      hasCertification: req.body.hasCertification
     };

    const message = 'Mission Commander creado.';
    await prisma.missioncommander.create({data: missioncommander});
    return res.json({message});
});

app.put('/mc/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.missioncommander.update({
		where: {
			id: id
		},
		data: {
			missionCommander: req.body.missionCommander
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/mc/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.missioncommander.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});
