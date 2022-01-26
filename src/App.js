import React, { useCallback } from "react";

import "./styles.css";
import { useRef } from "react";

export default function App() {
  const canvasRef = useRef(null);

  const drawRect = useCallback((ctx) => {
    // Triangle
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(100, 200);
    ctx.lineTo(50, 50);
    // ctx.closePath();
    ctx.fillStyle = "coral";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(150, 200);
    ctx.lineTo(250, 200);
    ctx.closePath();
    ctx.stroke();
  }, []);

  const rect = useCallback((ctx) => {
    // // Rectangle
    ctx.beginPath();
    ctx.rect(300, 50, 150, 100);
    ctx.fillStyle = "teal";
    ctx.fill();
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    drawRect(ctx);
    rect(ctx);
  }, [drawRect, rect]);

  return (
    <div>
      {/* <h1>HTML5 Canvas + React.js</h1> */}
      <canvas
        ref={canvasRef}
        id="canvas"
        width="600"
        height="400"
        // width="200"
        // height="100"
        // style={{ border: "1px solid #d3d3d3" }}
      ></canvas>
    </div>
  );
}
