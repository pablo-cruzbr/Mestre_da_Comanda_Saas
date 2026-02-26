import {PrismaClient} from '@Prisma/client'
import 'dotenv/config';

const prismaClient = new PrismaClient();

export default prismaClient;