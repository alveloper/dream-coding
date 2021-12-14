{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  // const result = checkNotNullBad(123);
  // console.log(result);
  // checkNotNullBad(null);

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  // const result = checkNotNullAnyBad(123);
  // any이므로 타입이 안전하지 않음

  // 이 함수는 파라미터로 T or null 을 받고 T 를 반환하는 함수
  // 사용자가 숫자를 넣으면 숫자가 리턴되고,
  // 불리언을 넣으면 불리언이 리턴되는 함수라는 걸 알 수 있음.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const string = checkNotNull("123");
  // const bool: string = checkNotNull(true); // error!
  // generic을 이용하면 사용하는 사람이 타입을 결정할 수 있고,
  // 유연하지만 타입을 보장받을 수 있다.
}
