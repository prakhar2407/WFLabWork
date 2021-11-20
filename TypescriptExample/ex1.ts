interface Pointlike {
    x: number;
    y: number;
  }
  interface Named {
    name: string;
  }
   
  function logPoint(point: Pointlike) {
    console.log("x = " + point.x + ", y = " + point.y);
  }
   
  function logName(x: Named) {
    console.log("Hello, " + x.name);
  }
   
  const obj = {
    x: 0,
    y: 0,
    name: "Origin",
  };
   
  logPoint(obj);
  logName(obj);

  class Empty {}
 
function fn(arg: Empty) {
  // do something?
}
 
// No error, but this isn't an 'Empty' ?
fn({ k: 10 });

class Car {
    drive() {
      // hit the gas
    }
  }
  class Golfer {
    drive() {
      // hit the ball far
    }
  }
  // No error?
  let w: Car = new Golfer();