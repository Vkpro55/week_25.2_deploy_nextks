import React from "react";

import { prisma } from "@repo/prisma/client";

export default async function Home() {
  const user = await prisma.user.findFirst();

  return <div>
    FirstName: {user?.username} || Password: {user?.password}</div>;
}
