class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {}
  display() {
    console.log(`
            ID: ${this.id},
            Price: ${this.price},
            Description: ${this.description}
        `);
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public author: string,
    public title: string
  ) {
    super(id,price,description);
  }

  display(): void {
    super.display();
      console.log(`
      Author: ${this.author},
      Title: ${this.title}
      `)
  }
}

class Electronic extends Product {
    constructor(
      public id: string,
      public price: number,
      public description: string,
      public brand: string,
      public model: string
    ) {
      super(id,price,description);
    }
  
    display(): void {
      super.display();
        console.log(`
        Brand: ${this.brand},
        Model: ${this.model}
        `)
    }
  }


  const myBook = new Book("1",19.67,"A Good Book","John Dear","John's book");
  myBook.display();

  const laptop = new Electronic("2",90.67,"A Good Laptop","Dell","Dell's latitude");
  laptop.display();


  