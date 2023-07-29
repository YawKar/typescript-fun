let user: { name: string; age: number } = {
  name: "Abracadabrus",
  age: 59,
};

// doesn't work
// user.job = "Marketing";

let escapeHatch = user as any;
// perfectly fine! but you're fired
escapeHatch.job = "Marketing";

let realTopType = user as unknown;
// that's how top type should behave (it doesn't work)
// realTopType.job = "Marketing";
