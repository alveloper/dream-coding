{
  // best practice ๐ธ
  const Calculator = require("../calculator");

  // ๊ด๋ จ ์๋ ํ์คํธ๋ค์ ํ๋์ ๊ทธ๋ฃน์ผ๋ก ๋ฌถ์ ์ ์๋ describe
  describe("Calculator", () => {
    // ์๋๋ ๊ฐ๊ฐ์ ํ์คํธ๋ง๋ค ์๋กญ๊ฒ ํด๋์ค๋ฅผ ์์ฑํด์
    // ๊ทธ ํด๋์ค๋ฅผ ํ์คํธ๋ง๋ค ๋๋ฆฝ์ ์ผ๋ก ์ฌ์ฉํด์ผ ํ์ง๋ง ์ฝ๋๊ฐ ์ค๋ณต๋๋ ๋ฌธ์ ๊ฐ ์์
    // ์ด๋ beforeEach๋ฅผ ์ฌ์ฉํ๋ฉด ํ์คํธ๊ฐ ์์ํ๊ธฐ ์ ์ ์ฝ๋ฐฑ ํจ์ ์์ ์๋ ๋ด์ฉ์ ์คํ
    // ์ฌ๊ธฐ์๋ beforeEach๋ก ๊ฐ ํ์คํธ๋ง๋ค ๋๋ฆฝ์ ์ธ ํด๋์ค๋ฅผ ์ฌ์ฉํ  ์ ์๊ฒ ํจ
    let cal;
    beforeEach(() => {
      cal = new Calculator();
    });

    // it์ calculator๋ฅผ ๊ฐ๋ฆฌํค๋ 3์ธ์นญ ์ฃผ์ด ๊ฐ์ ์กด์ฌ
    it("inits with 0", () => {
      // const cal = new Calculator();
      expect(cal.value).toBe(0);
    });

    it("sets", () => {
      // const cal = new Calculator();
      cal.set(9);
      expect(cal.value).toBe(9);
    });

    it("clears", () => {
      cal.set(10);
      cal.clear();
      expect(cal.value).toBe(0);
    });

    it("adds", () => {
      cal.set(2);
      cal.add(3);
      expect(cal.value).toBe(5);
    });

    it("add should throw an error if value is greater than 100", () => {
      expect(() => {
        cal.add(101);
      }).toThrowError(Error);
      // .toThrowError("Value can not be greater than 100") ๋ ๊ฐ๋ฅ
    });

    it("subtracts", () => {
      cal.set(100);
      cal.subtract(50);
      expect(cal.value).toBe(50);
    });

    it("multiplies", () => {
      cal.set(3);
      cal.multiply(3);
      expect(cal.value).toBe(9);
    });

    // divide ๊ธฐ๋ฅ์ ํ๋์ง๋ง ๊ทธ ๊ธฐ๋ฅ ์์ ์์ํ  ์ ์๋ ์ผ์ด์ค๊ฐ ์ฌ๋ฌ๊ฐ์ง๋ผ์
    // describe๋ก ๋ ๋ค์ ๋ฌถ์ด์ ํ์คํธ
    describe("divides", () => {
      it("0 / 0 === NaN", () => {
        cal.divide(0);
        // expect(cal.value).toBe(0); // ๐ฉ
        expect(cal.value).toBe(NaN);
      });

      it("1 / 0 === Infinity", () => {
        cal.set(1);
        cal.divide(0);
        expect(cal.value).toBe(Infinity);
      });

      it("4 / 4 === 1", () => {
        cal.set(4);
        cal.divide(4);
        expect(cal.value).toBe(1);
      });
    });
  });
}

{
  // ๋ด๊ฐ ์ด ๋ต
  const Calculator = require("../calculator");

  it("calculator", () => {
    const calculator = new Calculator();
    expect(calculator.value).toBe(0);

    calculator.set(1);
    expect(calculator.value).toBe(1);

    calculator.clear();
    expect(calculator.value).toBe(0);

    calculator.add(10);
    expect(calculator.value).toBe(10);

    calculator.multiply(2);
    expect(calculator.value).toBe(20);

    calculator.divide(5);
    expect(calculator.value).toBe(4);

    calculator.subtract(10);
    expect(calculator.value).toBe(-6);
  });
}
