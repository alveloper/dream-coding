import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;
  // 전달받은 요소로 페이지라는 컴포넌트를 만들어서
  // 만들어진 페이지를 붙여주는 일을 하고 있음
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    image.attachTo(appRoot, "beforeend");
  }
}

// 우리 애플리케이션이 실행되면 app.ts가 실행
// app.ts는 App 이라는 클래스의 인스턴스만 생성
// 생성자 안에서는 document라는 클래스를 가진 요소를 받아와서 전달하는 역할만 함
new App(document.querySelector(".document")! as HTMLElement);
