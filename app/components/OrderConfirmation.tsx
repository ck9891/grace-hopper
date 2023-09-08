import { Link } from "@remix-run/react";
import TDLogo from "./TDLogo";

function OrderConfirmation({ orderNumber }) {
  return (
    <div className="order-confirmation">
      <TDLogo />
      <div className="message">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 90">
          <path
            style={{ fill: "#fff" }}
            d="M121.647 34.792h2.02l-4.03 39.74h-2.02l-1 9.86h-33.73l-1-9.86h-2.03l-4.03-39.74h2.03l-.96-9.41h-4.63l1.7-10.67h4.15l2.22-8.33h38.82l2.23 8.33h4.14l1.7 10.67h-4.63l-.95 9.41z"
          />
          <path
            style={{ fill: "#00b624" }}
            d="M81.989 17.391h38.669l-1.722-6.528H83.782l-1.793 6.528zM77.962 18.995l-.933 5.882h49.36l-1.004-5.882z"
          />
          <path
            style={{
              fill: "none",
              stroke: "#1a5336",
              strokeMiterlimit: 10,
              strokeWidth: "3px",
            }}
            d="M124.249 16.209h-4.018l-2.224-8.322H81.49l-2.224 8.322h-4.018l-1.219 7.676h51.44l-1.22-7.676zM119.996 36.194l1.246-12.277H78.255l1.261 12.428M83.253 73.185l.985 9.709h31.021l1.008-9.938"
          />
          <path
            style={{
              fill: "none",
              stroke: "#1a5336",
              strokeMiterlimit: 10,
              strokeWidth: "3px",
            }}
            d="m118.281 73.03 3.726-36.733H77.488l3.726 36.733h37.067z"
          />
          <path
            style={{
              fill: "#fff",
              stroke: "#1a5336",
              strokeMiterlimit: 10,
              strokeWidth: "3px",
            }}
            d="M79.25 16.209h40.965"
          />
          <path
            d="M104.642 36.297a5.058 5.058 0 0 1 5.058 5.058l-7.031 31.172"
            style={{
              fill: "none",
              stroke: "#1a5336",
              strokeLinejoin: "bevel",
              strokeWidth: "3px",
            }}
          />
        </svg>
        <h1>Thank You!</h1>
        <p className="lead">Your order will be ready shortly.</p>
        <p className="order-number">Order #: {orderNumber}</p>
        <Link to="/order" className="btn">Order Now</Link>
      </div>
    </div>
  );
}

export default OrderConfirmation;
