{
  // best practice 💸
  const Calculator = require("../calculator");

  // 관련 있는 테스트들을 하나의 그룹으로 묶을 수 있는 describe
  describe("Calculator", () => {
    // 원래는 각각의 테스트마다 새롭게 클래스를 생성해서
    // 그 클래스를 테스트마다 독립적으로 사용해야 하지만 코드가 중복되는 문제가 있음
    // 이때 beforeEach를 사용하면 테스트가 시작하기 전에 콜백 함수 안에 있는 내용을 실행
    // 여기서는 beforeEach로 각 테스트마다 독립적인 클래스를 사용할 수 있게 함
    let cal;
    beforeEach(() => {
      cal = new Calculator();
    });

    // it은 calculator를 가리키는 3인칭 주어 같은 존재
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
      // .toThrowError("Value can not be greater than 100") 도 가능
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

    // divide 기능은 하나지만 그 기능 안에 예상할 수 있는 케이스가 여러가지라서
    // describe로 또 다시 묶어서 테스트
    describe("divides", () => {
      it("0 / 0 === NaN", () => {
        cal.divide(0);
        // expect(cal.value).toBe(0); // 💩
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
  // 내가 쓴 답
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
