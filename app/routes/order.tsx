// @ts-nocheck

// build a coffee order form in remix
import type { ActionArgs } from "@remix-run/node";

import {
  useRouteData,
  useLoaderData,
  useActionData,
  Form,
  useNavigate,
} from "@remix-run/react";
import { useEffect } from "react";
import { json, redirect } from "@remix-run/node";
import { useSocket } from "~/context";
import { motion } from "framer-motion";
import { z, ZodError } from "zod";
import WiredComponent from "~/components/WiredComponent";
import TDLogo from "~/components/TDLogo";
import OrderConfirmation from "~/components/OrderConfirmation";
import { createOrder } from "~/models/orders.server";

const formDataSchema = z.object({
  name: z.string().min(3).max(50),
});
export async function action({ request }: ActionArgs) {
  try {
    const form = await request.formData();

    const order = {
      name: form.get("name"),
      temperature: form.get("temperature"),
      coffee: form.get("coffee"),
      milk: form.get("milk"),
      syrup: form.get("syrup"),
      donut: form.get("donut"),
    };

    formDataSchema.parse(order);

    // insert order into db
    const newOrder = await createOrder(order);

    return json({ order: newOrder });
  } catch (error) {
    if (error instanceof ZodError) {
      // Handle validation errors
      const validationErrors = error.flatten(); // Get detailed error messages

      // You can pass the validation errors back to the form view
      return json(
        { validationErrors: validationErrors.fieldErrors },
        { status: 400 }
      );
    } else {
      // Handle other unexpected errors
      console.error("An unexpected error occurred:", error);
      return json({ error: "An unexpected error occurred" }, { status: 500 });
    }
  }
}

export default function Order() {
  const socket = useSocket();
  const data = useActionData();
  const navigate = useNavigate();
  console.log({ data });
  useEffect(() => {
    if (!socket) return;
    if (!data?.order) return;
    // console.log(d)
    socket.on("order", (data) => {
      console.log(data);
    });

    socket.emit("order", data?.order);
    setTimeout(() => {
      navigate("/order");
    }, 10000);
  }, [socket, data?.order]);

  if (data?.order) {
    return <OrderConfirmation orderNumber={data?.order?.id} />;
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="container">
        <section className="title-section">
          <TDLogo />
          <WiredComponent />
        </section>
        <Form method="post" className="order-form">
          {/* get name and email address */}
          <div className="form-group">
            <div className="form-group-label grid">
              <p className="number">1</p>
              <p>
                Please provide your name in order to receive
                a free coffee and/or donut.
              </p>
              <div className="form-control">
                <label className="text-input" htmlFor="name">
                  Name
                  <input type="text" name="name" id="name" />
                  {data?.validationErrors?.name && (
                    <p className="error">{data?.validationErrors?.name[0]}</p>
                  )}
                </label>
              </div>
            </div>
          </div>
          {/* get coffee temperature: hot or iced */}
          <div className="form-group">
            <div className=" grid">
              {/* <div className="form-group-label"> */}
              <p className="number">2</p>
              <p>Temperature</p>
              {/* </div> */}
              <div className="form-control radio-group">
                <label htmlFor="hot">
                  Hot
                  <input type="radio" name="temperature" id="hot" value="hot" />
                </label>
                <label htmlFor="iced">
                  Iced
                  <input
                    type="radio"
                    name="temperature"
                    id="iced"
                    value="iced"
                  />
                </label>
              </div>
            </div>
          </div>
          {/* customize coffee: Drip Cofee, Latte, Cappuccino, Espresso Shot */}
          <div className="form-group">
            <div className="form-group-label grid">
              <p className="number">3</p>
              <p>Choose your drink</p>
              <div className="form-control radio-group">
                <label htmlFor="drip">
                  Drip Coffee
                  <input type="radio" name="coffee" id="drip" value="drip" />
                </label>
                <label htmlFor="latte">
                  Latte
                  <input type="radio" name="coffee" id="latte" value="latte" />
                </label>
                <label htmlFor="cappucino">
                  Cappuccino
                  <input
                    type="radio"
                    name="coffee"
                    id="cappucino"
                    value="cappuccino"
                  />
                </label>
                <label htmlFor="espresso">
                  Espresso Shot
                  <input
                    type="radio"
                    name="coffee"
                    id="espresso"
                    value="espresso"
                  />
                </label>
              </div>
            </div>
          </div>
          {/* get milk options */}
          <div className="form-group">
            <div className="form-group-label grid">
              <p className="number">4</p> <p>Milk Options</p>
              <div className="form-control radio-group">
                <label htmlFor="wholeMilk">
                  Whole Milk
                  <input
                    type="radio"
                    name="milk"
                    id="wholeMilk"
                    value="whole milk"
                  />
                </label>
                <label htmlFor="skimMilk">
                  Skim Milk
                  <input
                    type="radio"
                    name="milk"
                    id="skimMilk"
                    value="skim milk"
                  />
                </label>
                <label htmlFor="soyMilk">
                  Soy Milk
                  <input
                    type="radio"
                    name="milk"
                    id="soyMilk"
                    value="soy milk"
                  />
                </label>
                <label htmlFor="almond">
                  Almond Milk
                  <input type="radio" name="milk" id="almond" value="almond" />
                </label>
                <label htmlFor="oat">
                  Oat Milk
                  <input type="radio" name="milk" id="oat" value="oat" />
                </label>
                <label htmlFor="noMilk">
                  No Milk
                  <input type="radio" name="milk" id="noMilk" value="no milk" />
                </label>
              </div>
            </div>
          </div>
          {/* get syrup options */}
          <div className="form-group">
            <div className="form-group-label grid">
              <p className="number">5</p> <p>Customize your drink</p>
              <div className="form-control radio-group">
                <label htmlFor="vanilla">
                  Vanilla Syrup
                  <input
                    type="radio"
                    name="syrup"
                    id="vanilla"
                    value="vanilla"
                  />
                </label>
                <label htmlFor="caramel">
                  Caramel Syrup
                  <input
                    type="radio"
                    name="syrup"
                    id="caramel"
                    value="caramel"
                  />
                </label>
                <label htmlFor="mocha">
                  Mocha Syrup
                  <input type="radio" name="syrup" id="mocha" value="mocha" />
                </label>
                <label htmlFor="noSyrup">
                  No Syrup
                  <input
                    type="radio"
                    name="syrup"
                    id="noSyrup"
                    value="no syrup"
                  />
                </label>
              </div>

            </div>
          </div>
          {/* get donut options */}
          <div className="form-group">
            <div className="form-group-label grid">
              <p className="number">6</p> <p>Choose a Donut</p>
              <div className="form-control radio-group">
                <label htmlFor="vanillaDonut">
                  Vanilla Sprinkle
                  <input
                    type="radio"
                    name="donut"
                    id="vanillaDonut"
                    value="Vanilla Sprinkle"
                  />
                </label>
                <label htmlFor="tdGreenFrosted">
                  TD Green Frosted
                  <input
                    type="radio"
                    name="donut"
                    id="tdGreenFrosted"
                    value="TD Green Frosted"
                  />
                </label>
                <label htmlFor="noDonut">
                  No Donut
                  <input
                    type="radio"
                    name="donut"
                    id="noDonut"
                    value="no donut"
                  />
                </label>
                <label htmlFor="coffeeFlavoured" className="two-col">
                  Coffee Flavored w/ Chocolate Sprinkles
                  <input
                    type="radio"
                    name="donut"
                    id="coffeeFlavoured"
                    value="Coffee Flavored w/ Chocolate Sprinkles"
                  />
                </label>
              </div>

            </div>
          </div>
          <input type="submit" value="Submit" className="btn" />
        </Form>
      </div>
    </motion.main>
  );
}
