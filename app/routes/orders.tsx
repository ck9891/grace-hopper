// @ts-nocheck

// build a coffee order form in remix
import type { ActionArgs } from "@remix-run/node";

import { useRouteData, useLoaderData, useActionData, Form } from "@remix-run/react";
import { useEffect, useState } from "react";
import { json } from "@remix-run/node"; 
import { useSocket } from "~/context";
import OrderForm  from "~/components/OrderForm";


export default function Order() {
  const socket = useSocket();
  console.log({socket})
  const [orders, setOrders] = useState([])
  useEffect(() => {
    if (!socket) return;
    // console.log(d)
    socket.on("order", (data) => {
      console.log(data);
      setOrders([data, ...orders]);
    });

  }, [socket]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Current Orders</h1>
      <ul>
        { orders.length > 0 ? 
        orders.map((order) => (
          <li key={order.email}>
            <div>
              <strong>{order.name}</strong>
              <br />
              <a href={`mailto:${order.email}`}>{order.email}</a>
            </div>
            <div>
              <strong>{order.temperature}</strong>
              <br />
              <strong>{order.coffee}</strong>
              <br />
              <strong>{order.milk}</strong>
              <br />
              <strong>{order.syrup}</strong>
            </div>
          </li>
        )) : <li>No orders yet</li>}
      </ul>
    </div>
  );
}
