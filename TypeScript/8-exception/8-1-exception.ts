// Java: Exception
// JavaScript: Error
// Error 발생
// const array = new Array(10000000000000000);

{
  const position = { x: 0, y: 0 };

  function move(direction: "up" | "down" | "left" | "right") {
    switch (direction) {
      case "up":
        position.y++;
        break;
      case "down":
        position.y--;
        break;
      case "left":
        position.x--;
        break;
      case "right":
        position.x++;
        break;
      default:
        // 더 처리해야 할 케이스가 있으면 아래의 invalid에 빨간 줄로 표시됨
        // Type 'string' is not assignable to type 'never'.
        const invalid: never = direction;
        throw new Error(`Invalid direction: ${invalid}`);
    }
  }
}

// Eror(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`File not exist: ${fileName}`);
  }
  return "file contents🧾";
}

function closeFile(fileName: string) {}

const fileName = "not exist!💩";

// try {
//   console.log(readFile(fileName));
// } catch (error) {
//   console.log(`catched!!`);
// } finally {
//   closeFile(fileName);
//   console.log(`finally!`);
// }

function run() {
  const fileName = "not exist!💩";

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    // catch 에서 return 해도 finally는 실행되므로 가급적 같이 쓰기
    closeFile(fileName);
    console.log(`closed!`);
  }
}
run();
