class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(species) {
    // Call the constructor of the parent class
    super(species);
  }

  // Method to bark
  bark() {
    console.log('woof');
  }
}

class Cat extends Animal {
  constructor(species) {
    // Call the constructor of the parent class
    super(species);
  }

  // Method to purr
  purr() {
    console.log('purr');
  }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); 
myCat.purr();    

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); 
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;