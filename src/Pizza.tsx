import React from "react";

export function Pizza({ name }: { price: number; name: string; id: string }) {
  return <div>{name}</div>;
}