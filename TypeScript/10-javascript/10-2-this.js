console.log(this);

function simpleFunc() {
  console.log(this);
}
simpleFunc();
console.clear();

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  }
}

const counter = new Counter();
counter.increase();

const caller = counter.increase;
caller(); // 함수 선언식일 때는 undefined

// 함수 선언식일 땐 this를 바인딩 해야 함
// const caller = counter.increase.bind(counter);
// caller(); // Counter {count: 0, increase: ƒ}

class Bob {

}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob {run: ƒ}