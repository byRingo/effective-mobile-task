import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const main = async () =>{
  const data = Array.from({ length: 100000}).map((curUser, index) => ({
    name: `name${index}`,
    surname: `surname${index}`,
    age: 1,
    gender: "male",
    isProblems: true
  }))
  await prisma.user.createMany({
    data
  })
}

main().then(async () => {
  await prisma.$disconnect()
})