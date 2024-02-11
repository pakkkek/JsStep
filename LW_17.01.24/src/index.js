// LW 17.01.24
// 1
/*class PrintMachine {
  constructor(fontSize, fontColor, fontFamily) {
    this.fontSize = fontSize;
    this.fontColor = fontColor;
    this.fontFamily = fontFamily;
  }

  print(text) {
    document.write(
      `<p style="font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily};">${text}</p>`
    );
  }
}

let myPrinter = new PrintMachine("16px", "blue", "Arial");

myPrinter.print("Hello, this text is printed using PrintMachine class!");*/

// 2
class News {
    constructor(title, text, tags, publicationDate) {
      this.title = title;
      this.text = text;
      this.tags = tags;
      this.publicationDate = new Date(publicationDate);
    }
  
    formatDate() {
      const currentDate = new Date();
      const timeDifference = currentDate - this.publicationDate;
  
      if (timeDifference < 24 * 60 * 60 * 1000) {
        return "сьогодні";
      } else if (timeDifference < 7 * 24 * 60 * 60 * 1000) {
        const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
        return `${daysAgo} днів тому`;
      } else {
        const options = { day: "numeric", month: "numeric", year: "numeric" };
        return this.publicationDate.toLocaleDateString("en-GB", options);
      }
    }
  
    print() {
      document.write(`<p><strong>Заголовок:</strong> ${this.title}</p>`);
      document.write(`<p><strong>Текст:</strong> ${this.formatDate()}</p>`);
      document.write(`<p>${this.text}</p>`);
      document.write(`<p>${this.tags.map((tag) => `#${tag}`).join(" ")}</p>`);
    }
  }
  
  let myNews = new News(
    "Some Question in English",
    "Lorem Ipsum is fjdsalfhasdgjdsajfkladsjf;lasdj",
    ["lorem", "ipsum", "text"],
    "2024-01-10T12:30:00"
  );
  
  myNews.print();
  
  // 3
  class NewsFeed {
    constructor() {
      this.newsArray = [];
    }
  
    get numberOfNews() {
      return this.newsArray.length;
    }
  
    displayAllNews() {
      if (this.newsArray.length === 0) {
        document.write("<p>No news available.</p>");
      } else {
        this.newsArray.forEach((news) => {
          document.write("<hr>");
          news.print();
        });
      }
    }
  
    addNews(news) {
      this.newsArray.push(news);
    }
  
    removeNews(index) {
      if (index >= 0 && index < this.newsArray.length) {
        this.newsArray.splice(index, 1);
      } else {
        document.write("<p>Invalid index. News not removed.</p>");
      }
    }
  
    sortNewsByDate() {
      this.newsArray.sort((a, b) => b.publicationDate - a.publicationDate);
    }
  
    searchNewsByTag(tag) {
      return this.newsArray.filter((news) => news.tags.includes(tag));
    }
  }
  
  let myNewsFeed = new NewsFeed();
  
  myNewsFeed.addNews(
    new News("Title 1", "Text 1", ["tag1", "tag2"], "2024-01-10T12:30:00")
  );
  myNewsFeed.addNews(
    new News("Title 2", "Text 2", ["tag2", "tag3"], "2024-01-10T13:30:00")
  );
  myNewsFeed.addNews(
    new News("Title 3", "Text 3", ["tag1", "tag3"], "2024-01-11T14:30:00")
  );
  
  document.write("<h2>All News:</h2>");
  myNewsFeed.displayAllNews();
  
  myNewsFeed.sortNewsByDate();
  
  document.write("<h2>All News after Sorting:</h2>");
  myNewsFeed.displayAllNews();
  
  let tagToSearch = "tag2";
  let searchedNews = myNewsFeed.searchNewsByTag(tagToSearch);
  document.write(`<h2>News with Tag '${tagToSearch}':</h2>`);
  searchedNews.forEach((news) => news.print());
  
  let newsIndexToRemove = 1;
  myNewsFeed.removeNews(newsIndexToRemove);
  
  document.write("<h2>All News after Removal:</h2>");
  myNewsFeed.displayAllNews();
  