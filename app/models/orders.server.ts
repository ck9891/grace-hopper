// @ts-nocheck

import {prisma} from '~/db.server';

export async function getOrders() {
  return prisma.order.findMany({orderBy: [ {complete: 'asc'}]});
}

export async function getOrderById(id) {
  return prisma.order.findUnique({where: {id}});
}

export async function createOrder(data) {
  return prisma.order.create({data});
}

export async function updateOrder(id, data) {
  return prisma.order.update({where: {id}, data});
}

export async function getOrderCount() {
  return prisma.order.count();
}

export async function deleteOrders() {
  return prisma.order.deleteMany();
} 

export async function getOrdersEmail() {

  // get unique emails
  const details = await prisma.order.findMany({
    select: {
      email: true,
      name: true,
    },
    distinct: ['email']
  });

  return details
}