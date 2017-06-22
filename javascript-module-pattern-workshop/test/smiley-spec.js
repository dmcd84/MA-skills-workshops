describe("smiley", function() {
  it("should add a smiley emoji to passed string", function() {
    expect(smiley("hello")).toEqual("hello :)");
  });
});
