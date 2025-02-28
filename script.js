//complete this code
class Animal {
  constructor(species: string){
	 this._species = species;
  }
	get species():string{
		return `${this._species}`
	}
	makeSound(): void {
		console.log(`The ${this.species} makes a sound`)
	}
}

class Dog extends Animal {
	super(species);
	bark(): void{
		console.log(`woof`)
	}
}

class Cat extends Animal {
	super(species);
	purr(): void{
		console.log(`purr`);
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
