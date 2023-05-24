-- CreateTable
CREATE TABLE "Leao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,
    "Tamanho"INTEGER NOT NULL,
    "TemRabo" BOOLEAN NOT NULL,

    CONSTRAINT "Leao_pkey" PRIMARY KEY ("id")
);
