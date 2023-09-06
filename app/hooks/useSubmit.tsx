// @ts-nocheck

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSocket } from "~/context";

export function useSubmit() {
  const socket = useSocket();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = useCallback(
    (socket, location) => async (values) => {
      const { data } = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      socket.emit("order", data);

      navigate(location.pathname);
    },
    [socket, navigate, location]
  );

  return {
    handleSubmit: handleSubmit(socket, location),
  };
}