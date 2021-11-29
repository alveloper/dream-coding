{
  type Operation = "add" | "substract" | "multiply" | "divide" | "remainder";

  const calculate = (operation: Operation, a: number, b: number): number => {
    switch (operation) {
      case "add":
        return a + b;
      case "substract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      case "remainder":
        return a % b;
      default:
        throw new Error(`Unknown operation: ${operation}`);
    }
  };

  /**
   * Let's make a calculator 🧮
   */
  console.log(calculate("add", 1, 3)); // 4
  console.log(calculate("substract", 3, 1)); // 2
  console.log(calculate("multiply", 4, 2)); // 8
  console.log(calculate("divide", 4, 2)); // 2
  console.log(calculate("remainder", 5, 2)); // 1
}
