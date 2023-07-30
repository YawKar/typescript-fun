{
  class Box<T> {
    value?: T;

    hasValue(): this is this & { value: T } {
      return this.value !== undefined;
    }
  }

  const box = new Box();
  box.value = "Gameboy";

  box.value;

  if (box.hasValue()) {
    box.value;
  }
}

{
  class FileSystemObject {
    constructor(path: string, networked: false);
    constructor(path: string, networked: true, server: string);

    constructor(
      protected path: string,
      protected networked: boolean,
      protected server?: string
    ) {}

    isFile(): this is FileRep {
      return this instanceof FileRep;
    }

    isDir(): this is Directory {
      return this instanceof Directory;
    }

    isNetworked(): this is this & Networked {
      return this.networked;
    }
  }

  interface Networked {
    server: string;
  }

  class FileRep extends FileSystemObject {
    get extension() {
      return this.path.slice(this.path.lastIndexOf(".") + 1);
    }
  }

  class Directory extends FileSystemObject {
    subFsos: FileSystemObject[] = [];
  }

  let fso: FileSystemObject = new FileRep(
    "/local/filename.bin",
    true,
    "localhost:3030"
  );

  if (fso.isFile()) {
    console.log(fso.extension);
  }
  if (fso.isDir()) {
    console.log(fso.subFsos);
  }
  if (fso.isNetworked()) {
    console.log(fso.server);
  }
}

{
  class Box<T> {
    contents?: T;

    constructor(contents: T) {
      this.contents = contents;
    }

    setContents(newContents: T): this {
      this.contents = newContents;
      return this;
    }

    hasValue(): this is this & { contents: T } {
      return this.contents !== undefined;
    }
  }

  class ClearableBox<T> extends Box<T> {
    clear() {
      this.contents = undefined;
    }
  }

  let clearableBox = new ClearableBox("content");
  type asClearable = ReturnType<typeof clearableBox.setContents>;
  let baseBox: Box<string> = clearableBox;
  type asBase = ReturnType<typeof baseBox.setContents>;
}

{
  class User {
    constructor(public name: string, public age: number) {}

    getInfo(this: User) {
      return `${this.name} ${this.age}`;
    }
  }

  let user = new User("SleepDeprivedGNuser", 20);
  user.getInfo(); // perfectly fine!
  user.getInfo.call(user); // perfectly fine!
  // error, because method only accepts User instances for `this`
  // user.getInfo.call({ a: "nything else won't work" });
}
