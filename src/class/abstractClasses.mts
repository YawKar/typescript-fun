abstract class Printer {
  constructor(private stamp: string, public name: string) {}
  abstract printFeature(feature: string): void;

  generateUID() {
    return 4;
  }
}

class ConcretePrinter extends Printer {
  override printFeature(feature: string): void {
    console.log({
      uid: this.generateUID(),
      name: this.name,
      feature,
    });
  }
}

let concreteOne: Printer = new ConcretePrinter("concrete", "concrete name");
concreteOne.printFeature("feature");

function instantiate<T>(ctor: new () => T): T {
  return new ctor();
}

let arr = instantiate<Array<number>>(Array);
console.log(arr.length);
