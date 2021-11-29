{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay(): void {
      console.log(`full time!`);
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay(): void {
      console.log(`part time!`);
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수 💩💩💩
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  // generic이긴 generice인데 이 타입은 Employee를 확장한 애들만 된다는 의미
  // 좀 더 제한적인 범위 내에서 generic 활용 가능
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.workFullTime();
  bob.workPartTime();

  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);
  // ellieAfterPay.workFullTime(); // pay 이후에 FullTimeEmployee 의 메서드 workFullTime()을 잃어버림
  // ellieAfterPay 는  const ellieAfterPay: Employee 임.

  const obj = {
    name: "ellie",
    age: 20,
  };

  const obj2 = {
    animal: "🦮",
  };

  // object, key 둘을 받아서 object[key] 를 리턴하는 함수
  // object는 어떤 제네릭이므로 T
  // key도 어떤 제네릭인데 object랑 다르므로 K
  // getValue<T, K> 인데, K 는 오브젝트 T에 있는 키들 중 하나
  // keyof x -> 그 오브젝트 안에 들어있는 키의 타입을 의미
  // 리턴되는 값은 오브젝트 T에 있는 K의 value가 리턴
  function getValue<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
  }

  console.log(getValue(obj, "name")); // ellie
  console.log(getValue(obj, "age")); // 20
  console.log(getValue(obj2, "animal")); // 🦮
  // console.log(getValue(obj, "score"));
  // Argument of type '"score"' is not assignable to parameter of type '"name" | "age"'.
}
