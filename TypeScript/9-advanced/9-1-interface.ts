type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object β­οΈ
const obj1: PositionType = { x: 1, y: 1 };
const obj2: PositionInterface = { x: 1, y: 1, z: 1 };

// class β­οΈ
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

// π only interface can be merged.
interface PositionInterface {
  z: number;
}

// type PositionType {} // Duplicate identifier 'PositionType'.

// π Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; // string

type NumberType = number;
type Direction = "left" | "right"; // type only

/*
types?
- μ΄λ€ λ°μ΄ν°μ λͺ¨μ΅, νμμ μ μνλ κ²
- λ°μ΄ν°λ₯Ό λ΄μ λͺ©μ μΌλ‘ μ¬μ©

interface?
- κ·κ²© μ¬ν­
- ν΄λμ€λ₯Ό κ΅¬νν  λ μ¬μ©
*/
