class Greeter {
    greeting: string;
   
    constructor(message: string) {
      this.greeting = message;
    }
   
    greet() {
      return "Hello, " + this.greeting;
    }
  }
   
  let greeter = new Greeter("world");
  console.log(greeter.greet());



  class foo {
    private _bar: boolean = false;
    get bar(): boolean {
        return this._bar;
    }
    set bar(value: boolean) {
        this._bar = value;
    }
}