describe('first', () => {
  before(() => {
    console.log("first before hook");
  });
  describe('second', () => {
    before(() => {
      console.log("second before hook");
    });
    describe('third', () => {
      before(() => {
        console.log("third before hook");
      });

      it('demonstration', () => {
        console.log("HI");
      });
    });
  });
});