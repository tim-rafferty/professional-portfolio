"use client";

import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("./sketch"), { ssr: false });

export default function P5Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Sketch />
    </div>
  );
}
