import {prisma} from '~/db.server';

export async function addAnswer(data) {
  console.log(data)
  return prisma.answer.create({data});
}

export async function getAnswers() {
  return prisma.answer.findMany();
} 