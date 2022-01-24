{
  // best practice
  const fetchProduct = require("../async");

  describe("Async", () => {
    it("async-done", (done) => {
      fetchProduct().then((item) => {
        expect(item).toEqual({ item: "Milk", price: 200 });
        done();
        // done으로 함수의 끝을 알려줌
        // 그러나 done 방식은 느리기 때문에 return 방식을 추천
      });
    });

    // 많이 쓰는 방법
    it("async-return", () => {
      return fetchProduct().then((item) => {
        expect(item).toEqual({ item: "Milk", price: 200 });
      });
    });

    // 많이 쓰는 방법
    it("async-await", async () => {
      const product = await fetchProduct();
      expect(product).toEqual({ item: "Milk", price: 200 });
    });

    it("async-resolves", () => {
      return expect(fetchProduct()).resolves.toEqual({
        item: "Milk",
        price: 200,
      });
    });
    it("async-rejects", () => {
      return expect(fetchProduct("error")).rejects.toEqual("network error");
    });
  });
}

{
  // 내가 쓴 답
  const fetchProduct = require("../async");

  test("the data is object", () => {
    return expect(fetchProduct("")).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  test("returned with error", () => {
    return expect(fetchProduct("error")).rejects.toMatch("network error");
  });
}
