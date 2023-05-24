import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const server = fastify();
const prisma = new PrismaClient();

server.get('/leoes', async (request, reply) => {
  const { search } = request.query as { search?: string };
  let leoes;
  
  if (search) {
    leoes = await prisma.Leao.findMany({
      where: {
        OR: [
          { nome: { contains: search, mode: 'insensitive' } },
          { descricao: { contains: search, mode: 'insensitive' } }
        ]
      }
    });
  } else {
    leoes = await prisma.Leao.findMany();
  }

  return leoes;
});

server.post('/leoes', async (request, reply) => {
  const { nome, descricao,peso,Tamanho, idade, TemRabo } = request.body as {
    nome: string;
    descricao: string;
    idade: number;
    peso:number;
    Tamanho:number;
    TemRabo: boolean;
  };

  const Leao = await prisma.Leao.create({
    data: {
      nome,
      descricao,
      idade,
      peso,
      Tamanho,
      TemRabo,
    },
  });

  return Leao;
});

server.put('/Leoes/:id', async (request, reply) => {
  const { id } = request.params as { id: string };
  const { nome, descricao,peso , Tamanho ,idade, TemRabo } = request.body as {
    nome: string;
    descricao: string;
    peso:number;
    Tamanho:number
    idade: number;
    TemRabo: boolean;
  };

  const updatedLeao = await prisma.Leao.update({
    where: { id: parseInt(id, 10) },
    data: {
      nome,
      descricao,
      peso,
      Tamanho,
      idade,
      TemRabo,
    },
  });

  return updatedLeao;
});

server.delete('/Leao/:id', async (request, reply) => {
  const { id } = request.params as { id: string };

  await prisma.Leao.delete({
    where: { id: parseInt(id, 10) },
  });

  return { message: 'Leao deletado com sucesso!' };
});

const start = async () => {
  try {
    await prisma.$connect();
    await server.listen(3000);
    console.log(`Servidor rodando em http://localhost:3000`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
