// @ts-nocheck

// build a coffee order form in remix
import type { ActionArgs } from "@remix-run/node";

import { useRouteData, useLoaderData, useActionData, Form } from "@remix-run/react";
import { useEffect } from "react";
import { json } from "@remix-run/node"; 
import { useSocket } from "~/context";
import OrderForm  from "~/components/OrderForm";

export async function action({request}: ActionArgs )  {
  const form = await request.formData();

  const order = {
    name: form.get("name"),
    email: form.get("email"),
    temperature: form.get("temperature"),
    coffee: form.get("coffee"),
    milk: form.get("milk"),
    syrup: form.get("syrup"),
  }

  return json({order});
}


export default function Order() {
  const socket = useSocket();
  const data = useActionData();
  console.log({data})
  useEffect(() => {
    if (!socket) return;
    if (!data?.order) return;
    // console.log(d)
    socket.on("order", (data) => {
      console.log(data);
    });

    socket.emit("order", data?.order);
  }, [socket, data?.order]);

  console.log({order: data?.order})
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Order</h1>
      
    <Form method="post">
      {/* get name and email address */}
      <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      </div>
      {/* get coffee temperature: hot or iced */}
      <div>
      <label htmlFor="hot">Hot</label>
      <input type="radio" name="temperature" id="hot" value="hot" />
      <label htmlFor="iced">Iced</label>
      <input type="radio" name="temperature" id="iced" value="iced" />
      </div>
      {/* customize coffee: Drip Cofee, Latte, Cappucino, Espresso Shot */}
      <div>
      <label htmlFor="drip">Drip Coffee</label>
      <input type="radio" name="coffee" id="drip" value="drip" />
      <label htmlFor="latte">Latte</label>
      <input type="radio" name="coffee" id="latte" value="latte" />
      <label htmlFor="cappucino">Cappucino</label>
      <input type="radio" name="coffee" id="cappucino" value="cappucino" />
      <label htmlFor="espresso">Espresso Shot</label>
      <input type="radio" name="coffee" id="espresso" value="espresso" />
      </div>
      {/* get milk options */}
      <div>
      <label htmlFor="wholeMilk">Whole Milk</label>
      <input type="radio" name="milk" id="wholeMilk" value="whole-milk" />
      <label htmlFor="skimMilk">Skim Milk</label>
      <input type="radio" name="milk" id="skimMilk" value="skim-milk" />
      <label htmlFor="soyMilk">Soy Milk</label>
      <input type="radio" name="milk" id="soyMilk" value="soy-milk" />
      <label htmlFor="almond">Almond Milk</label>
      <input type="radio" name="milk" id="almond" value="almond" />
      <label htmlFor="oat">Oat Milk</label>
      <input type="radio" name="milk" id="oat" value="oat" />
      <label htmlFor="noMilk">No Milk</label>
      <input type="radio" name="milk" id="noMilk" value="no-milk" />
      </div>
      {/* get syrup options */}
      <div>
      <label htmlFor="vanilla">Vanilla Syrup</label>
      <input type="radio" name="syrup" id="vanilla" value="vanilla" />
      <label htmlFor="caramel">Caramel Syrup</label>
      <input type="radio" name="syrup" id="caramel" value="caramel" />
      <label htmlFor="mocha">Mocha Syrup</label>
      <input type="radio" name="syrup" id="mocha" value="mocha" />
      <label htmlFor="noSyrup">No Syrup</label>
      <input type="radio" name="syrup" id="noSyrup" value="no-syrup" />
      </div>
      <input type="submit" value="Submit" />
    </Form>
    </div>
  );
}
