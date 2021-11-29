// A or B
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

// Genenric은 Itemr 의 I, Value의 V 로도 많이 씀
class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}

  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5
const best = new SimpleEither({ name: "ellie" }, "hello");
