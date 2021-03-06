import { BaseComponent } from "./../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
            <div class="image__holder">
              <img class="image__thumnail">
              <p class="image__title"></p>
            </div>
          </section>`);

    const imageElement = this.element.querySelector(
      ".image__thumnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
