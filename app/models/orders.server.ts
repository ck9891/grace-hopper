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