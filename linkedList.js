class _Node {
    constructor(val, next) {
        this.value = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let currNode = this.head
            while (currNode.next !== null) {
                currNode = currNode.next
            }
            currNode.next = new _Node(item, null)
        }
    }
    insertBefore(valBefore, item){
      //if list is empty
      if (!this.head) {
        return null
      }
      //if no head
      if (this.head === null) {
        this.insertFirst(item)
      }
      //if at head
      if (this.head.value === valBefore) {
        let temp = this.head
        this.head = new_Node(item, temp)
        return
      }
      let currNode = this.head;
      let next
      let previousNode
      while (currNode.value !== valBefore) {
        previousNode = currNode
        currNode = currNode.next
      }
      previousNode.next = new _Node(item, currNode)
    }
    insertAfter(valAfter, item) {
      if (!this.head) {
        return null
      }
      if (this.head === null) {
        this.insertFirst(item)
      }
      //if at head
      if (this.head.value === valAfter) {
        let temp = this.head.next
        this.head.next = new_Node(item, temp)
        return
      }
      let currNode = this.head
      let next = ''
      while (currNode.value !== valAfter) {
        currNode = currNode.next
      }
      if (currNode === null) {
        this.insertLast(item)
        return
      }
      next = currNode.next
      currNode.next = new _Node(item, next)
    }
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item)
      } else {
        let currNode = this.head
        while (currNode.next !== null) {
          currNode = currNode.next
        }
      currNode.next = new _Node(item, null)
      }
    }
    insertAt(position, item) {
      if (this.head === null) {
        this.insertFirst(item)
        return
      } else {
        let currNode = this.head
        let index = 0
        while (currNode.next !== null && position != index) {
          currNode = currNode.next
          index++
        }
        const temp = new _Node(item, currNode.next)
        currNode.next = temp
      }
    }
    find(item) {
        let currNode = this.head;
        if (!this.head) {
          return null;
        }
    
        while (currNode.value !== item) {
          if (currNode.next === null) {
            return null;
          } else {
            currNode = currNode.next;
          }
        }
        return currNode;
      }
      remove(item) {
        let previousNode = this.head;
        let currNode = this.head;
    
        if (!this.head) {
          return null;
        }
        if (this.head.value === item) {
          this.head = this.head.next;
          return;
        }
        while (currNode.value !== item && currNode !== null) {
          previousNode = currNode;
          currNode = currNode.next;
        }
        if (currNode === null) {
          console.log("Item does note exist")
          return
        }
        previousNode.next == currNode.next
      }
}

function main() {
    const SLL = new LinkedList()
    SLL.insertFirst("Apollo")
    console.log(SLL)
    SLL.insertLast("Boomer")
    console.log(SLL)
    SLL.insertLast("Helo")
    SLL.insertLast("Husker")
    SLL.insertLast("Starbuck")
    SLL.insertLast("Tauhida")
    console.log(SLL.head.next)
    SLL.remove("Husker")

  
    return SLL
  }
  
const SLL = main();

function display(list) {
  let output = ''
  let currNode = list.head
  while (currNode !== null) {
    output += currNode.value
    if (currNode.next !== null) {
      output += ' -> '
    }
    currNode = currNode.next
  }
  return output
}

console.log('display: ' + display(SLL))

function size(list) {
  let index = 0
  let currNode = list.head
  while (currNode !== null) {
    currNode = currNode.next
    index++
  }
  return index
}

console.log('size: ' + size(SLL))

function isEmpty(list) {
  if (!list.head) {
    return true
  }
  return false
}

console.log('List is empty:' + isEmpty(SLL))

function findPrevious(item, list) {
  if (!list.head || list.head === null) {
    return null;
  }
  //if at head
  if (list.head.value === item) {
    return list.head;
  }
  // else
  let currNode = list.head;
  let previousNode;
  while (currNode.value !== item) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  return previousNode.value;
}

console.log('Find Previous: ' + findPrevious('Starbuck', SLL))

function findLast(list) {
  if (!list.head || list.head === null) {
    return null;
  }
  //if at head
  if (list.head.next === null) {
    return list.head;
  }
  // else
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode.value;
}

console.log('Find Last: ' + findLast(SLL))

function reverseList(list) {
  if (!list.head || list.head === null) {
    return null;
  }
  // else
  let currNode = list.head;
  let previousNode = null;
  let temp = currNode;

  while (currNode !== null) {
    temp = currNode.next;
    currNode.next = previousNode;
    previousNode = currNode;
    currNode = temp;
  }
  list.head = previousNode;
  return display(list);
}


console.log('Reverse List: ' + reverseList(SLL))

//Mystery program
// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve.What is the runtime of this algorithm ?

function WhatDoesThisProgramDo(list) {
  let current = list.head;
  while (current !== null) { // 1
    let newNode = current;
    while (newNode.next !== null) { // 1 
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

//Takes the values in the list and removes the duplicates.

function third(list) {
  let index = 0
  let bounds = size(list)
  let currNode = list.head
  while (currNode !== null && index !== bounds -3) {
    currNode = currNode.next
    index++
  }
  return currNode.value
}

console.log('Third in list: ' + third(SLL))

function middle(list) {
  let index = 0
  let bounds = size(list)
  let currNode = list.head
  while (currNode !== null && index !== Math.floor(bounds / 2)) {
    currNode = currNode.next
    index++
  }
  return currNode.value
}

console.log('Middle of list: ' + middle(SLL))

//I don't know how to create a cycle in CycleList

const CycleList = new LinkedList();
CycleList.insertLast("Apples");
CycleList.insertLast("Bananas");
CycleList.insertLast("Oranges");
CycleList.insertLast("Berries");
console.log(display(CycleList));

function cycles(list) {
  if (!list.head || list.head === null) {
    return null;
  }
  let currNode = list.head;
  let tempNode = null;
  while (currNode !== null && currNode.next !== null) {
    tempNode = currNode.next;
    while (tempNode !== null) {
      if (currNode.value === tempNode.value) return "This list has a cycle!";
      tempNode = tempNode.next;
    }
    currNode = currNode.next;
  }
  return "This list has no cycle!";
}
console.log(cycles(CycleList));