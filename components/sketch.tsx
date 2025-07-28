"use client";

import React from "react";
import Sketch from "react-p5";

const MySketch = () => {
  let PARTS: any[] = [];
  let count = 2;
  let counter = 0;

  const w = (p5: any, n: any) => {
    if (n == null) return p5.width;
    return p5.width * n;
  };

  const h = (p5: any, n: any) => {
    if (n == null) return p5.height;
    return p5.height * n;
  };

  const hsbShift = (p5: any, col: any, h: any, s: any, b: any) => {
    return p5.color(p5.hue(col) + h, p5.saturation(col) + s, p5.brightness(col) + b);
  };

  const randNeg = (p5: any, n: any) => {
    return (n == null) ? (p5.random() < 0.5 ? 1 : -1) : (p5.random() < 0.5 ? n : -n);
  };

  const ease = (n: any) => {
    return n ** 3;
  };

  class particle {
    tag: any;
    pos: any;
    col: any;
    siz: any;
    asiz: any;
    dir: any;
    spd: any;
    life: any;
    lifespan: any;
    others: any;
    thshift: any;
    tsshift: any;
    tbshift: any;
    rsiz: any;

    constructor(p5: any, sx: any, sy: any, sc: any, ss: any, sd: any, sl: any, ls: any, tag: any, others: any) {
      this.tag = tag;
      this.pos = p5.createVector(sx, sy);
      this.col = sc;
      this.siz = 1;
      this.asiz = ss;
      this.dir = sd;
      this.spd = (this.tag == "trunk") ? 5 : p5.random(0.2, 4);
      this.life = sl;
      this.lifespan = ls;
      this.others = others;
      this.thshift = p5.random(-1, 1) * 0;
      this.tsshift = p5.random(1) * 0;
      this.tbshift = p5.random(-1) * 0;
      this.rsiz = this.asiz * this.siz;
    }

    kill() {
      let index = this.others.indexOf(this);
      if (index > -1) {
        this.others.splice(index, 1);
      }
    }

    update(p5: any) {
      this.rsiz = this.asiz * this.siz;
      this.pos.add(p5.createVector(p5.cos(p5.radians(this.dir)) * this.spd, p5.sin(p5.radians(this.dir)) * this.spd));
      this.dir += p5.random(-.9, 1) * (this.tag == "trunk" && this.siz > 0.7 ? 1 : p5.map(this.life, 0, this.lifespan, 1, 5));
      if (p5.random() < (this.tag == "branch" ? 0.003 : 0.005) && this.tag != "trunk") this.dir += randNeg(p5, 72) * 0;
      this.siz = p5.lerp(this.siz, 0, p5.random(0.015));

      if (this.rsiz < 0.1 || this.spd > this.rsiz) {
        this.kill();
      }

      this.col = hsbShift(p5, this.col, p5.random(this.thshift), p5.random(this.tsshift), p5.random(this.tbshift));

      if (p5.random() < 0.03 && this.tag == "trunk" && this.siz < .55) {
        this.others.push(new particle(p5, this.pos.x, this.pos.y, this.col, this.rsiz, this.dir + randNeg(p5, p5.random(15, 30)), this.life, this.lifespan, "branch", this.others));
      }

      if (p5.random() < 0.01 && this.tag == "branch") {
        this.others.push(new particle(p5, this.pos.x, this.pos.y, this.col, this.rsiz, this.dir, this.life, this.lifespan, "branch", this.others));
      }

      if (p5.random() < p5.map(this.siz, 0, 0.25, 0.5, 0.3) && this.tag == "branch" && this.siz < 0.25) {
        this.others.push(new particle(p5, this.pos.x, this.pos.y, this.col, (this.siz ** 0.5) * this.rsiz, this.dir + randNeg(p5, p5.random(5, 20)), 0, p5.random(this.lifespan * 0.05), "twig", this.others));
      }

      p5.noStroke();
      p5.fill(this.col);
      p5.stroke(p5.random(50));
      p5.strokeWeight(((this.siz / 2 * this.asiz) / 13));
      let chance = p5.round(p5.random(1));
      p5.line(this.pos.x, this.pos.y, this.pos.x + p5.random(this.siz * this.asiz) / 2, this.pos.y);
      let choice = p5.round(p5.random(1));
      if (choice == 0) p5.circle(this.pos.x + (this.siz * this.asiz), this.pos.y, 1);

      if (this.life > this.lifespan) {
        if (counter > 490) p5.rect(this.pos.x, this.pos.y, p5.random(20));
        this.kill();
      }

      this.life++;
    }
  }

  const setup = (p5: any, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(255);
    for (let i = 0; i < count; i++) {
      PARTS.push(new particle(p5, w(p5, 0.5), h(p5, 1.0), "#000", 80, 270, 0, 900, "trunk", PARTS));
      PARTS.push(new particle(p5, w(p5, 0.25), h(p5, 1.0), "#000", 130, 270, 0, 1200, "trunk", PARTS));
      PARTS.push(new particle(p5, w(p5, 0.75), h(p5, 1.0), "#000", 170, 270, 0, 700, "trunk", PARTS));
    }
  };

  const draw = (p5: any) => {
    counter++;
    p5.push();
    p5.scale(0.7);
    p5.translate(0, 450);
    for (var p of PARTS) {
      for (let i = 0; i < 1; i++) p.update(p5);
    }
    p5.pop();
  };

  const windowResized = (p5: any) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    // Reset and restart the sketch
    PARTS = [];
    counter = 0;
    p5.background(255);
    for (let i = 0; i < count; i++) {
      PARTS.push(new particle(p5, w(p5, 0.5), h(p5, 1.0), "#000", 80, 270, 0, 900, "trunk", PARTS));
      PARTS.push(new particle(p5, w(p5, 0.25), h(p5, 1.0), "#000", 130, 270, 0, 1200, "trunk", PARTS));
      PARTS.push(new particle(p5, w(p5, 0.75), h(p5, 1.0), "#000", 170, 270, 0, 700, "trunk", PARTS));
    }
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default MySketch;
