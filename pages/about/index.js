import React from "react";

// pages/index.js
import dynamic from "next/dynamic";

const Hello = dynamic(() =>
  import("../../components/hello").then((mod) => mod.Hello)
);

export default function About() {
  return (
    <>
      <div>
        <h2>Abouttttt</h2>
        <Hello />
      </div>
    </>
  );
}
