// @ts-nocheck

// build a coffee order form in remix
import type { ActionArgs } from "@remix-run/node";

import { useLoaderData, useActionData, Form } from "@remix-run/react";
import { useEffect, useState } from "react";
import { json } from "@remix-run/node";
import { motion } from "framer-motion";
import { useSocket } from "~/context";
import TDLogo from "~/components/TDLogo";
import { getOrders, updateOrder } from "~/models/orders.server";
import { requireUser } from "~/session.server";

export const loader = async ({request}) => {
  // await requireUser(request);
  // get orders from db
  const orders = await getOrders();
  return json({ existingOrders: orders });
};

export const action = async ({ request }: ActionArgs) => {
  // update order to set completed to true
  const formData = await request.formData();
  const orderId = formData.get("order-id");

  await updateOrder(parseInt(orderId), { complete: true });
  const allOrders = await getOrders();
  console.log({allOrders})
  return json({ allOrders });
};

function sortOrdersByCompleted(orders) {
  // want a reverse sort
  return orders.sort((a, b) => {
    if (a.complete && !b.complete) return 1;
    if (!a.complete && b.complete) return -1;
    return 0;
  } );
}

export default function Order() {
  const socket = useSocket();
  const { existingOrders } = useLoaderData();

  const actionData = useActionData();

  const [orders, setOrders] = useState(existingOrders || []);

  useEffect(() => {
    if (!socket) return;
    // console.log(d)
    socket.on("order", (data) => {
      const newOrders = [...orders];
      newOrders.push(data);
      sortOrdersByCompleted(newOrders);
      setOrders(newOrders);
    });
    if (actionData?.allOrders) {
    const sortedOrders = sortOrdersByCompleted(orders);
    setOrders(actionData?.allOrders || [...sortedOrders]);
    }
  }, [socket,orders, actionData]);

  

  console.log({ orders });

  return (
    <motion.div className="orders"  initial={{opacity: 0}} animate={{opacity: 1}}>
      <TDLogo />
      <h1>Current Orders</h1>
      <ul>
        {orders.length > 0 ? (
          orders.map((order) => (
            <motion.li key={order.id} className={order.complete ? `complete` : ''} >
              <div className="order-for">
                <p>
                  <strong>Order For:</strong> {order.name}<br />
                  <small>Order #: {order.id}</small>
                </p>
              </div>
              <div className="order-details">
                <p>
                  <strong>Temperature:</strong> {order.temperature}
                  <small>Options Available: (Iced or Hot)</small>
                </p>
                <p>
                  <strong>Coffee Type:</strong> {order.coffee}
                  <small>
                    Options Available: (Latte, Cappucino, Espresso, Drip)
                  </small>
                </p>
                <p>
                  <strong>Milk:</strong> {order.milk}
                  <small>
                    Options Available: (Whole, Skim, Soy, Almond, Oat, No Milk)
                  </small>
                </p>
                <p>
                  <strong>Syrup</strong>: {order.syrup}
                  <small>
                    Options Available: (Vanilla, Caramel, Mocha, No Syrup)
                  </small>
                </p>
                <p>
                  <strong>Donut</strong>: {order?.donut ? order.donut : "No Donut"}
                  <small>
                    Options Available: (Vanilla Sprinkle, TD Green Frosted, Coffee Flavored w/ Chocolate Sprinkles, No Donut)
                  </small>
                </p>
                {!order?.complete ? (
                  <Form method="post">
                    <input type="hidden" name="order-id" value={order.id} />
                    <button className="btn" type="submit">
                      Complete Order
                    </button>
                  </Form>
                ) : null}
              </div>
            </motion.li>
          ))
        ) : (
          <li>No orders yet</li>
        )}
      </ul>
    </motion.div>
  );
}
