import { PrismaClient } from '@prisma/client';


//Hago un adaptador de prisma cliente
export const prisma = new PrismaClient();