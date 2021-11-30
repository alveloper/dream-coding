{
  const obj = {
    name: "ellie",
  };
  // 접근하는 방법
  obj.name; // ellie
  obj["name"]; // ellie

  // 타입도 인덱스를 기반으로 해서 결정할 수 있다
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "문자열만 할당 가능";

  type Gender = Animal["gender"]; // 'male' | 'female'

  type Keys = keyof Animal;
  const key: Keys = "age"; // age name gender 만 사용 가능

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const perosn: Person = {
    name: "ellie",
    gender: "female",
  };
}
