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
}

function printMiddle(linkedList) {

}

new LinkedList(3).printAll(); // 3