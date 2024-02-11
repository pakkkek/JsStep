// HW 15.01.24
// 1
/*class ShoppingList {
  constructor() {
    this.items = [];
  }

  displayList() {
    document.write("<h3>Shopping List:</h3>");
    this.items.forEach((item) => {
      const status = item.isBought ? " (Bought)" : " (Not Bought)";
      document.write(`<p>${item.name} - ${item.quantity}${status}</p>`);
    });
  }

  addItem(name, quantity) {
    const existingItem = this.items.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ name, quantity, isBought: false });
    }
  }

  buyItem(name) {
    const itemToBuy = this.items.find((item) => item.name === name);

    if (itemToBuy) {
      itemToBuy.isBought = true;
    } else {
      document.write(`<p>${name} not found in the shopping list.</p>`);
    }
  }
}

let myShoppingList = new ShoppingList();

myShoppingList.addItem("Apple", 3);
myShoppingList.addItem("Banana", 2);
myShoppingList.addItem("Apple", 2);

myShoppingList.displayList();

myShoppingList.buyItem("Banana");

myShoppingList.displayList();*/

// 2
/*class Receipt {
  constructor(items) {
    this.items = items;
  }

  displayReceipt() {
    document.write("<h3>Receipt:</h3>");
    this.items.forEach((item) => {
      document.write(
        `<p>${item.name} - Quantity: ${item.quantity}, Price per unit: $${item.price}</p>`
      );
    });
  }

  calculateTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  }

  getMostExpensiveItem() {
    let mostExpensiveItem = this.items.reduce((maxItem, currentItem) => {
      return currentItem.price > maxItem.price ? currentItem : maxItem;
    }, this.items[0]);

    return mostExpensiveItem;
  }

  calculateAveragePrice() {
    let totalQuantity = 0;
    let totalPrice = 0;

    this.items.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    });

    if (totalQuantity === 0) {
      return 0;
    }

    return totalPrice / totalQuantity;
  }
}

let myReceipt = new Receipt([
  { name: "Apple", quantity: 3, price: 1.5 },
  { name: "Banana", quantity: 2, price: 0.8 },
  { name: "Orange", quantity: 1, price: 2.0 },
]);

myReceipt.displayReceipt();

document.write(`<p>Total: $${myReceipt.calculateTotal()}</p>`);

let mostExpensiveItem = myReceipt.getMostExpensiveItem();
document.write(
  `<p>Most Expensive Item: ${mostExpensiveItem.name} - $${mostExpensiveItem.price}</p>`
);

document.write(
  `<p>Average Price per Unit: $${myReceipt.calculateAveragePrice()}</p>`
);*/

// 3
/*function applyStyles(styles, text) {
  document.write(
    `<p style="${styles
      .map((style) => `${style.name}: ${style.value}`)
      .join(";")}">${text}</p>`
  );
}

let myStyles = [
  { name: "color", value: "blue" },
  { name: "font-size", value: "16px" },
  { name: "text-align", value: "center" },
  { name: "text-decoration", value: "underline" },
];

applyStyles(myStyles, "This is a styled text.");*/

// 4
class Academy {
    constructor() {
      this.rooms = [];
    }
  
    displayRooms() {
      document.write("<h3>Academy Rooms:</h3>");
      this.rooms.forEach((room) => {
        document.write(
          `<p>${room.name} - Seats: ${room.seats}, Faculty: ${room.faculty}</p>`
        );
      });
    }
  
    displayRoomsByFaculty(faculty) {
      const facultyRooms = this.rooms.filter((room) => room.faculty === faculty);
      document.write(`<h3>Rooms for ${faculty}:</h3>`);
      facultyRooms.forEach((room) => {
        document.write(`<p>${room.name} - Seats: ${room.seats}</p>`);
      });
    }
  
    displayRoomsForGroup(group) {
      const groupRooms = this.rooms.filter(
        (room) => room.seats >= group.students && room.faculty === group.faculty
      );
      document.write(
        `<h3>Rooms for ${group.students} students of ${group.faculty}:</h3>`
      );
      groupRooms.forEach((room) => {
        document.write(`<p>${room.name} - Seats: ${room.seats}</p>`);
      });
    }
  
    sortRoomsBySeats() {
      this.rooms.sort((a, b) => a.seats - b.seats);
    }
  
    sortRoomsByName() {
      this.rooms.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  
  let myAcademy = new Academy();
  
  myAcademy.rooms.push({ name: "Room A", seats: 15, faculty: "Engineering" });
  myAcademy.rooms.push({ name: "Room B", seats: 20, faculty: "Science" });
  myAcademy.rooms.push({ name: "Room C", seats: 10, faculty: "Arts" });
  
  myAcademy.displayRooms();
  
  myAcademy.displayRoomsByFaculty("Engineering");
  
  myAcademy.displayRoomsForGroup({ students: 12, faculty: "Science" });
  
  myAcademy.sortRoomsBySeats();
  myAcademy.displayRooms();
  
  myAcademy.sortRoomsByName();
  myAcademy.displayRooms();
  