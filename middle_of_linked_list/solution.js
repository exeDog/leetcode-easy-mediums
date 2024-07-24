class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    head = null;

    constructor(numberOfNodes) {
        for (let i = 0; i < numberOfNodes; i++) {
            const value = Math.floor(Math.random() * 10);

            this.add(value);
        }
    }

    printAll() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    add(value) {
        const node = new Node(value);
        if (this.head) {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } else {
            this.head = node;
        }
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current.next) {
            count++;
            current = current.next
        }

        return count;
    }
}

function printMiddle(linkedList) {
    const values = [];
    let current = linkedList.head;

    while(current) {
        values.push(current.data);
        current =  current.next;
    }

    return values[Math.floor(values.length / 2)]
}

function printMiddleSolutionTwo(linkedList) {
    let middlePointer = linkedList.head;
    let endPointer = linkedList.head;

    while(endPointer && endPointer.next) {
        middlePointer =  middlePointer.next;
        endPointer = endPointer.next.next;
    }

    return middlePointer.data;
}

const ll = new LinkedList(4);
const ll2 = new LinkedList(5);

console.log(printMiddle(ll));
console.log(printMiddle(ll2));
console.log(printMiddleSolutionTwo(ll));