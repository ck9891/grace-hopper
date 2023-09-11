// @ts-nocheck

// build a coffee order form in remix
import type { ActionArgs } from "@remix-run/node";

import {
  useRouteData,
  useLoaderData,
  useActionData,
  Form,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { json } from "@remix-run/node";
import { useSocket } from "~/context";
import OrderForm from "~/components/OrderForm";
import TDLogo from "~/components/TDLogo";

export default function Order() {
  const socket = useSocket();
  console.log({ socket });
  const sampleOrder = {
    name: "Ryan",
    email: "ryan@ryan.com",
    temperature: "hot",
    coffee: "latte",
    milk: "whole-milk",
    syrup: "vanilla",
  };
  const [orders, setOrders] = useState([sampleOrder]);

  useEffect(() => {
    if (!socket) return;
    // console.log(d)
    socket.on("order", (data) => {
      console.log(data);
      setOrders([data, ...orders]);
    });
  }, [socket]);

  function handleOrderSubmit(order) {
    console.log(order)
  }

  return (
    <div className="orders">
      <TDLogo />
      <h1>Current Orders</h1>
      <ul>
        {orders.length > 0 ? (
          orders.map((order) => (
            <li key={order.email}>
              <div className="order-for">
                <p>
                  <strong>Order For:</strong> {order.name}
                </p>
              </div>
              <div className="order-details">
                <p>
                  <strong>Temperature:</strong> {order.temperature}
                  <small>Options Available: (Iced or Hot)</small>
                </p>
                <p>
                  <strong>Coffee Type:</strong> {order.coffee}
                  <small>Options Available: (Latte, Cappucino, Espresso, Drip)</small>
                </p>
                <p>
                  <strong>Milk:</strong> {order.milk}
                  <small>Options Available: (Whole, Skim, Soy, Almond, Oat, No Milk)</small>
                </p>
                <p>
                  <strong>Syrup</strong>: {order.syrup}
                  <small>Options Available: (Vanilla, Caramel, Mocha, No Syrup)</small>
                </p>
                <button className="btn" onClick={handleOrderSubmit(order)}>Complete Order</button>
              </div>
            </li>
          ))
        ) : (
          <li>No orders yet</li>
        )}
      </ul>
    </div>
  );
}
