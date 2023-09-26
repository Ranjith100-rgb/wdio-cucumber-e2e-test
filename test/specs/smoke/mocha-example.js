describe.skip("Description of test suite", () => {
  before(() => {
    console.log("runs before the first test in the block");
  });

  after(() => {
    console.log("runs after the first test in the block");
  });

  it("individual test 1", () => {
    console.log("Execute code: individual test 1");
  });

  it("individual test 2", async () => {
    console.log("Execute code: individual test 2");
  });
});
