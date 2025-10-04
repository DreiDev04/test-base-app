"use client";

import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, world!</h1>
    </div>
  );
}
