// HW 17.01.24
// 1
class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(value) {
      this._radius = value;
    }
  
    get diameter() {
      return this._radius * 2;
    }
  
    calculateArea() {
      return Math.PI * this._radius ** 2;
    }
  
    calculateCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  let myCircle = new Circle(5);
  
  console.log("Radius:", myCircle.radius);
  console.log("Diameter:", myCircle.diameter);
  console.log("Area:", myCircle.calculateArea());
  console.log("Circumference:", myCircle.calculateCircumference());
  
  myCircle.radius = 8;
  console.log("New Radius:", myCircle.radius);
  console.log("New Diameter:", myCircle.diameter);
  console.log("New Area:", myCircle.calculateArea());
  console.log("New Circumference:", myCircle.calculateCircumference());
  
// 2
class HtmlElement {
    constructor(tagName, selfClosing = false, textContent = "") {
      this.tagName = tagName;
      this.selfClosing = selfClosing;
      this.textContent = textContent;
      this.attributes = [];
      this.styles = [];
      this.children = [];
    }
  
    setAttribute(name, value) {
      this.attributes.push({ name, value });
    }
  
    setStyle(name, value) {
      this.styles.push({ name, value });
    }
  
    addChild(element, atBeginning = false) {
      if (atBeginning) {
        this.children.unshift(element);
      } else {
        this.children.push(element);
      }
    }
  
    getHtml() {
      const attributesStr = this.attributes.map(attr => `${attr.name}="${attr.value}"`).join(" ");
      const stylesStr = this.styles.map(style => `${style.name}: ${style.value}`).join("; ");
      const childrenHtml = this.children.map(child => child.getHtml()).join("");
  
      if (this.selfClosing) {
        return `<${this.tagName} ${attributesStr} style="${stylesStr}" />`;
      } else {
        return `<${this.tagName} ${attributesStr} style="${stylesStr}">${this.textContent}${childrenHtml}</${this.tagName}>`;
      }
    }
  }
  
  let wrapperDiv = new HtmlElement("div", false, "");
  let innerDiv1 = new HtmlElement("div", false, "<h3>What is Lorem Ipsum?</h3><img style=\"width: 100%\" src=\"lipsum.jpg\" alt=\"Lorem Ipsum\"><p style=\"text-align: justify;\">\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\"<a href=\"https://www.lipsum.com/\" target=\"_blank\">More...</a></p>");
  let innerDiv2 = new HtmlElement("div", false, "<h3>What is Lorem Ipsum?</h3><img style=\"width: 100%\" src=\"lipsum.jpg\" alt=\"Lorem Ipsum\"><p style=\"text-align: justify;\">\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\"<a href=\"https://www.lipsum.com/\" target=\"_blank\">More...</a></p>");
  
  wrapperDiv.addChild(innerDiv1);
  wrapperDiv.addChild(innerDiv2);
  
  wrapperDiv.setStyle("display", "flex");
  innerDiv1.setStyle("width", "300px");
  innerDiv2.setStyle("width", "300px");
  
  document.write(wrapperDiv.getHtml());
  
// 3
class CssClass {
    constructor(className) {
      this.className = className;
      this.styles = [];
    }
  
    setStyle(property, value) {
      this.styles.push({ property, value });
    }
  
    removeStyle(property) {
      this.styles = this.styles.filter(style => style.property !== property);
    }
  
    getCss() {
      const stylesStr = this.styles.map(style => `${style.property}: ${style.value}`).join("; ");
      return `.${this.className} { ${stylesStr} }`;
    }
  }
  
  let wrapClass = new CssClass("wrap");
  wrapClass.setStyle("display", "flex");
  
  let blockClass = new CssClass("block");
  blockClass.setStyle("width", "300px");
  blockClass.setStyle("margin", "10px");
  
  let imgClass = new CssClass("img");
  imgClass.setStyle("width", "100%");
  
  let textClass = new CssClass("text");
  textClass.setStyle("text-align", "justify");
  
  console.log(wrapClass.getCss());
  console.log(blockClass.getCss());
  console.log(imgClass.getCss());
  console.log(textClass.getCss());

// 4
class HtmlBlock {
    constructor() {
      this.styles = [];
      this.rootElement = new HtmlElement("div", false, "");
    }
  
    addStyleClass(cssClass) {
      this.styles.push(cssClass);
    }
  
    getCode() {
      const stylesStr = this.styles.map(cssClass => cssClass.getCss()).join("\n");
      return `<style>\n${stylesStr}\n</style>\n${this.rootElement.getHtml()}`;
    }
  }
  
  let htmlBlock = new HtmlBlock();
  htmlBlock.addStyleClass(wrapClass);
  htmlBlock.addStyleClass(blockClass);
  htmlBlock.addStyleClass(imgClass);
  htmlBlock.addStyleClass(textClass);
  
  document.write(htmlBlock.getCode());
  