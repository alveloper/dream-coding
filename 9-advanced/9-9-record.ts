{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  // 하나와 어떤 하나를 연결하고 싶을 때, map 과 비슷한 기능을 제공.
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };

  type Product = "cat" | "dog";
  type NewProduct = Capitalize<Product>; // "Cat" | "Dog"
}
