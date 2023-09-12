import { getUser, requireUser } from "~/session.server";
import { redirect } from "@remix-run/node";
import { getOrdersEmail } from "~/models/orders.server";

// require json-2-csv module
const converter = require('json-2-csv')

export async function loader({ request }) {
  
  await requireUser(request);

  const report = await getOrdersEmail();
  console.log(report)
  try {
    const csv = await converter.json2csv(report)

    // print CSV string
    console.log(csv)

    // write CSV to a file
    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
      },
    });
  } catch (err) {
    console.log(err)
    return err
  }
  
}