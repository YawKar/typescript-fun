const pokemon = class {
  constructor(public name: string, public age: number) {}
};

const pikachu = new pokemon("Pika", 999);
class someOther extends pokemon {}
const Bulba = new someOther("Bulbazavr", 1);
