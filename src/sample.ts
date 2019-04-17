// Lorenz Attractor

import P5 from "p5/lib/p5.min";

const sketch = (p5):void => {
  let
    bw: number,
    bh: number,
    center: {x: number, y: number},
    startRenge: number = 40,
    x: number = 0,
    y: number = 0,
    z: number = 0,
    lastX: number = null,
    lastY: number = null,
    lastZ: number = null,
    p: number = 10,
    r: number = 28,
    b: number = 8/3,
    dt: number = 0.005,
    zoom: number = 10,
    speed: number = 10;

  const reset = ():void => {
    p5.clear();
    x = startRenge - Math.random() * startRenge * 2;
    y = startRenge - Math.random() * startRenge * 2;
    z = startRenge - Math.random() * startRenge * 2;
    lastX = null;
    lastY = null;
    lastZ = null;
    bw = p5.windowWidth;
    bh = p5.windowHeight;
    center = {
      x: bw / 2,
      y: bh / 2
    };
  };

  p5.setup = (): void => {
    reset();
    let canvas = p5.createCanvas(bw, bh);
    canvas.parent("canvas");
    p5.frameRate(60);
    p5.stroke('rgba(10%, 10%, 10%, 0.75)');
    p5.strokeWeight(0.2);
    let timer = null;
    window.onresize = function () {
      if (timer > 0) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        reset();
        p5.resizeCanvas(bw, bh);
      }, 300);
    };
  };

  p5.draw = (): void => {
    p5.translate(center.x, center.y);
    for (let i=0; i < speed; i++) {
      x += (-p * (x - y)) * dt;
      y += (-x * z + r * x - y) * dt;
      z += (x * y - b * z) * dt;
      if (lastX) {
        p5.line(
          lastX * zoom,
          lastY * zoom,
          x * zoom,
          y * zoom
        );
      };
      p5.ellipse(x * zoom, y * zoom, 0.75, 0.75);
      lastX = x;
      lastY = y;
      lastZ = z;
    }
  };

  p5.mouseClicked = (): void => {
    reset();
  };
}

new P5(sketch);