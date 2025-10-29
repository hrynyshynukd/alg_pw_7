class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.shift();
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[0];
    }

    clear() {
        this.items = [];
    }

    count() {
        return this.items.length;
    }

    toString() {
        return this.items.join(", ");
    }
}


const queue = new Queue();

queue.enqueue(5); // вставляє об’єкт у кінець черги
queue.enqueue(10);
queue.enqueue(15);


console.log("Queue elements:", queue.toString()); // виводить усі елементи від першого до останнього (FIFO)
console.log("Count:", queue.count()); // повертає кількість елементів у черзі
console.log("Peek:", queue.peek()); // повертає перший елемент черги, не видаляючи його
console.log("Dequeue:", queue.dequeue()); // повертає перший елемент черги та видаляє його
console.log("After dequeue:", queue.toString()); // виводить усі елементи черги після видалення першого

queue.clear(); // видаляє всі елементи з черги
console.log("After clear, count:", queue.count()); // повертає кількість елементів у черзі після очищення
