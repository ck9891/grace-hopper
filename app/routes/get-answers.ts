import { requireUser } from "~/session.server";
import { getAnswers } from "~/models/survey.server";

// require json-2-csv module
const converter = require('json-2-csv')

export async function loader({ request }) {
  
  await requireUser(request);

  const report = await getAnswers();
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