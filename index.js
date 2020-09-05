class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(value) {
        this.head = new _Node(value, this.head);
    }

    insertLast(val) {
        if (this.head === null) {
            // insert as the first item in the list
            this.insertFirst(val);
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new _Node(val, null);
        }
    }

    insertBefore(val, scan) {
        if (!this.head) {
            return null;
        }
        let curr = this.head;
        let post = this.head;
        let search = this.find(scan);
        if (search === null) {
            console.log("Key does not exist");
            return null;
        } else if (search === this.head) {
            this.insertFirst(val);
        } else {
            while (curr.next !== search) {
                curr = curr.next;
                post = curr.next;
            }
            curr.next = new _Node(val, post);
        }
    }

    insertAfter(val, scan) {
        if (!this.head) {
            return null;
        }
        let search = this.find(scan);
        if (search === null) {
            console.log("Key does not exist");
        } else {
            const nextPtr = search.next;
            search.next = new _Node(val, nextPtr);
        }
    }

    insertAt(val, pos) {
        if (!this.head) {
            return null;
        }
        if (pos === 0) {
            console.log("inserting first");
            this.insertFirst(val);
            return;
        } else {
            let steps = 1;
            let curr = this.head.next;
            let prev = this.head;
            while (curr !== null && steps < pos) {
                prev = curr;
                curr = curr.next;
                steps++;
            }
            if (steps !== pos) {
                console.log("Position exceeds list length");
            } else {
                prev.next = new _Node(val, curr);
            }
        }
    }

    find(val) {
        let curr = this.head;
        if (!this.head) {
            return null;
        }

        while (curr.value !== val) {
            if (curr.next === null) {
                return null;
            } else {
                curr = curr.next;
            }
        }
        return curr;
    }

    remove(val) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === val) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        let prev = this.head;
        while (curr !== null && curr.value !== val) {
            prev = curr;
            curr = curr.next;
        }
        if (curr === null) {
            console.log("nope");
            return;
        }
        prev.next = curr.next;
    }

    rundown() {
        let curr = this.head;
        while (curr !== null) {
            console.log("rundown", curr);
            curr = curr.next;
        }
    }
}

function main() {
    let SLL = new LinkedList();

    SLL.insertLast("Apollo");
    SLL.insertLast("Boomer");
    SLL.insertLast("Helo");
    SLL.insertLast("Husker");
    SLL.insertLast("Starbuck");

    SLL.insertLast("Tauhida");

    SLL.remove("Husker");

    SLL.insertAt("test", 0);

    SLL.rundown();

    SLL.insertBefore("new", "Helo");

    SLL.rundown();
}

main();
