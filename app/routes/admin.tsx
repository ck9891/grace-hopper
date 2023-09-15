import { deleteOrders, getOrderCount } from "~/models/orders.server";
import { deleteUsers, getUserCount } from "~/models/user.server";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import TDLogo from "~/components/TDLogo";
import { requireUser } from "~/session.server";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const form = formData.get("form");
  let usersDeleted: any = false;
  let ordersDeleted: any = false;
  if (form === "deleteAll") {
    usersDeleted = await deleteUsers();
  } else if (form === "deleteAllOrders") {
    ordersDeleted = await deleteOrders();
  }
  return json({ usersDeleted, ordersDeleted });
};

export const loader = async ({ request }) => {
  await requireUser(request);

  const stats = await Promise.all([getOrderCount(), getUserCount()]);

  return json({ stats });
};

function Admin() {
  const data = useLoaderData();
  const actionData = useActionData();

  if (data?.stats) {
    return (
      <main className="admin-page">
        <TDLogo />
        <h1>Admin</h1>
        <div className="stats">
          <div className="stat">
            <h2>Orders</h2>
            <p>{data.stats[0]}</p>
          </div>
          {/* <div className="stat">
            <h2>User Count</h2>
            <p>{data.stats[1]}</p>
          </div> */}
        </div>
        <a href="/get-answers" className="btn">
          Download Responses
        </a>
        <Form method="post">
          <input type="hidden" name="form" value="deleteAllOrders" />
          <button type="submit" className="btn">
            Delete Orders
          </button>
          {actionData?.ordersDeleted && <p>Deleted all Orders</p>}
        </Form>
        <Link to="/order" className="btn btn--green">
          Order Coffee
        </Link>
        <Link to="/orders" className="btn">
          View Orders
        </Link>
      </main>
    );
  }
  return (
    <main className="admin-page">
      <h1>Loading...</h1>
    </main>
  );
}

export default Admin;
