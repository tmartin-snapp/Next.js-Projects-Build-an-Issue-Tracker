import { PrismaClient} from '@prisma/client';

const prismaClientSingleon = () => {
  return new PrismaClient
}

type PrismaClientType = ReturnType<typeof prismaClientSingleon>;

const globalForPrisma = global as unknown as { 
  prismaClient: PrismaClientType | undefined 
};

const prisma = globalForPrisma.prismaClient ?? prismaClientSingleon();

export default prisma;