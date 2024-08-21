import React from "react";

import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "AnhTu",
      image: "https://images.app.goo.gl/PNjzCPe3S2L4NteT8",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}
