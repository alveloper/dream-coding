const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // 검증: predicate가 true기 때문에 onSuccess가 한 번은 호출되어야 한다.
    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // 검증: predicate가 true기 때문에 onFail은 0번 호출되어야 한다.
    expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
    // 검증: calls의 첫번째로 호출된 함수에 첫번째 인자는 yes가 되어야 한다.
    expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");
  });

  if (
    ("should call onFail when predicate is false",
    () => {
      check(() => false, onSuccess, onFail);

      expect(onSuccess).toHaveBeenCalledTimes(0);
      expect(onFail).toHaveBeenCalledTimes(1);
      expect(onFail).toHaveBeenCalledWith("no");
    })
  );
});
