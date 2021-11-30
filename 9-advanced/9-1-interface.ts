type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object ⭐️
const obj1: PositionType = { x: 1, y: 1 };
const obj2: PositionInterface = { x: 1, y: 1, z: 1 };

// class ⭐️
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extneds
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };

// 😆 only interface can be merged.
interface PositionInterface {
  z: number;
}

// type PositionType {} // Duplicate identifier 'PositionType'.

// 😆 Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; // string

type NumberType = number;
type Direction = "left" | "right"; // type only

/*
types?
- 어떤 데이터의 모습, 타입을 정의하는 것
- 데이터를 담을 목적으로 사용

interface?
- 규격 사항
- 클래스를 구현할 때 사용
*/
