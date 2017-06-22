describe("interrobang", function() {
  it("should add two question marks, an exclamation mark and a smiley emoji to passed string", function() {
    expect(interrobangsmiley(exclaim, question, "hello")).toEqual("hello??! :)");
  });
});
