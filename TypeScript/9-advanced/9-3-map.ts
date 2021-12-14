{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  // [1, 2].map(item => item * item) // [1, 4]
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
    // T 타입에 있는 모든 키들을 P에 할당하고, P의 값의 타입을 매핑해서 만들 수 있음
    // 아래와 같음
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "hi",
    // animal: 'dog' // error
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    age: 10,
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  animal.name = "ellie";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
    description: "hi",
  };

  // video.author = 'alex' // 추후에 값 변경 불가능

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: null,
  };
}
