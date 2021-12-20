import { PageComponent } from "./components/page.js";
// page.js 로 임포트 가능한 이유
// 지금 PageComponent는 우리가 정의한 클래스예요. 지금 모션 프로젝트에서는 리액트 라이브러리를 쓰지도 않고 리액트 컴포넌트를 상속하지도 않은 순수 타입스크립트 클래스 이기 때문에 tsx 확장자를 사용하지 않아도 되어요 🙌

class App {
  constructor(appRoot) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}
new App(document.querySelector(".document"));
