export class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    // page component를 만들면 즉시
    // this.element 에는 ul element 생성
    // 그 안에는 This is pageCompoennt 라는 텍스트가 있음
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "This is PageComponent.";
  }

  // attachTo 라는 외부에서 사용 가능한 api도 있음
  // 페이지 컴포넌트 클래스를 쓰는 사람이 attachTo를 호출함으로써
  // 추가하고 싶은 곳의 요소를 전달하면, 함수 안에서 알아서
  // 해당하는 곳에 페이지를 생성
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
