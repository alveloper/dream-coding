{
  const position = { x: 0, y: 0 };

  const move = (direction: "up" | "down" | "left" | "right") => {
    switch (direction) {
      case "up":
        position.y--;
        break;
      case "down":
        position.y++;
        break;
      case "left":
        position.x--;
        break;
      case "right":
        position.x++;
        break;
      default:
        throw new Error(`Unknown direction: ${direction}`);
    }
  };
  /**
   * Let's make a game 🕹
   */
  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}
