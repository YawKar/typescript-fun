class Greeter {
  name!: string; // definite assignment operator (used if some third-party code initializes this field for you)
  protected surname?: string;
  readonly age: number;

  get fullName() {
    // implicitly 'readonly' because there's no setter for `fullName`
    return this.name + " " + this.surname;
  }

  set fullName(value) {
    // implicitly `: string` because was inferred from the return type of getter
    console.log(value.length);
  }

  constructor(age: number) {
    this.age = age;
    this.age = 23; // readonly only prevents assignments to the field outside of the constructor
  }

  ping() {
    console.log("pong");
  }
}

class SubGreeter extends Greeter {
  override surname = "sub greeter"; // implicitly exposures `protected` surname to `public`
  override ping(name?: string) {
    if (name == null) {
      super.ping();
    } else {
      console.log(`${name}, pong`);
    }
  }
}
