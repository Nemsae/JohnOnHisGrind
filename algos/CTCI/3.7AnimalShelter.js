class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
    this.next = null
  }
}

class AnimalShelter {
  constructor() {
    this.queue = null
  }

  enqueue(name, type) {
    if (this.queue === null) {
      this.queue = new Animal(name, type)
      return this.queue
    }

    let curr = this.queue
    while (curr.next !== null) {
      curr = curr.next
    }

    curr.next = new Animal(name, type)
    return this.queue
  }

  dequeueAny() {
    if (this.queue === null) return 'No animals!'

    let temp = this.queue.next
    let newAdopt = this.queue
    this.queue.next = null
    this.queue = temp

    return `${newAdopt.name}, the ${newAdopt.type}`
  }

  dequeueDog() {
    if (this.queue === null) return 'No animals!'

    let curr = this.queue
    let prev = null

    while (curr.next !== null && curr.type !== 'dog') {
      prev = curr
      curr = curr.next
    }

    if (curr.type === 'dog') {
      let newDogAdopt;

      if (this.queue === curr) {
        let temp = curr.next
        newDogAdopt = curr
        curr.next = null
        this.queue = temp
      } else {
        let temp = curr.next
        newDogAdopt = curr
        curr.next = null
        prev.next = temp
      }

      return `${newDogAdopt.name}, the ${newDogAdopt.type}`
    } else {
      return 'There are no more dogs!'
    }
  }

  dequeueCat() {
    if (this.queue === null) return 'No animals!'

    let curr = this.queue
    let prev = null

    while (curr.next !== null && curr.type !== 'cat') {
      prev = curr
      curr = curr.next
    }

    if (curr.type === 'cat') {
      let newCatAdopt;

      if (this.queue === curr) {
        let temp = curr.next
        newCatAdopt = curr
        curr.next = null
        this.queue = temp
      } else {
        let temp = curr.next
        newCatAdopt = curr
        curr.next = null
        prev.next = temp
      }

      return `${newCatAdopt.name}, the ${newCatAdopt.type}`
    } else {
      return 'There are no more cats!'
    }
  }
}

let myAnimalShelter = new AnimalShelter()
console.log('myAnimalShelter: ', myAnimalShelter);
console.log('enqueue:1c ', myAnimalShelter.enqueue('Alexa', 'cat'))
console.log('enqueue:2d ', myAnimalShelter.enqueue('Stevie', 'dog'))
console.log('enqueue:3d ', myAnimalShelter.enqueue('Alex', 'dog'))
// console.log('enqueue:2c ', myAnimalShelter.enqueue('Stella', 'cat'))
// console.log('enqueue:2c ', myAnimalShelter.enqueue('Ale', 'dog'))
console.log('dequeueCat: ', myAnimalShelter.dequeueCat())
console.log('dequeueCat: ', myAnimalShelter.dequeueCat())
console.log('myAnimalShelter: ', myAnimalShelter);
console.log('dequeueDog: ', myAnimalShelter.dequeueDog())
console.log('myAnimalShelter: ', myAnimalShelter);
console.log('dequeueDog: ', myAnimalShelter.dequeueDog())
// console.log('dequeueAny: ', myAnimalShelter.dequeueAny())
// console.log('dequeueAny: ', myAnimalShelter.dequeueAny())
// console.log('dequeueAny: ', myAnimalShelter.dequeueAny())
console.log('myAnimalShelter: ', myAnimalShelter);
