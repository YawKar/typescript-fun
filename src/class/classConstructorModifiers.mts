interface Occupation {
  workplace: string;
  job: string;
}

interface Location {
  longitude: number;
  latitude: number;
}

class User {
  constructor(
    public readonly name: string,
    protected readonly age: number,
    private readonly occupation: Occupation,
    readonly location: Location // public readonly
  ) {
    this.location = location;
  }
}

let user = new User(
  "YawKar",
  20,
  { job: "Front-end Engineer", workplace: "LH" },
  { longitude: 404, latitude: 404 }
);

user.name;
// user.age;
// user.occupation;
user.location;
