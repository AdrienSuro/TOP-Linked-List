class LanguageList {

    constructor(name) {
      this.name = name;
      this.length = 0;
      this.tail = null;
      this.head = null;
      }
  
    append(value) {
      let newNode = new Node(value)
      if(this.head == null) {
        this.head = newNode;
      }
      if (this.tail == null) {
        this.tail = newNode;
      }
      else if (this.tail != null) {
        this.tail.nextNode = newNode;
      }
      this.tail = newNode; 
      this.length++
    }
  
    prepend(value) {
      let newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
      this.length++;
    }
  
    size() {
      return this.length;
    }

    head() {
      return this.head;
    }

    tail() {
        return this.tail;
    }
  
    at(index) {
      let current = this.head
      let i=0;
      for (i=0; i<=index ; i++) {
        if (i == index) {
          return current
        }
        if (current.nextNode) {
          current = current.nextNode;
        }
      } 
    }

    pop() {
        let current = this.head;
        const thisCopy = this;
        function searchEmptyNode(node) {
            if (node.nextNode == null) {
                thisCopy.head = null;
                thisCopy.tail = null;
                thisCopy.length--
                return
            }
            if (node.nextNode.nextNode == null) {
                node.nextNode = null;
                thisCopy.tail = node;
                thisCopy.length--
                return
            }
            if (node.nextNode != null) {
                let next = node.nextNode;
                searchEmptyNode(next)
            }
        }
        searchEmptyNode(current)
    } 
    
    contains(value) {
        let current = this.head;
        for (let i=0; i<this.length; i++) {
            if (current.value == value) {
                return true
            }
            else if (current.nextNode == null) {
                return false
            }
            else {
                current = current.nextNode;
            }
        }
    }
  
    toString() {
      let wholeString = "";
      let current = this.head;
      for (let i=0; i<this.length; i++) {
        wholeString += `( ${current.value} ) -> `
        if (current.nextNode) {
          current = current.nextNode;
        }
      }
      wholeString += "null"
      return wholeString
    }
  }
  
  class Node {
  
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }
  // Usage:
  let user = new LanguageList("My language list");
  
  user.append("HTML")

  user.prepend("CSS")

  user.prepend("Javascript")

  user.append("React");

  user.prepend("TypeScript")

  console.log(user.contains("TypeScript"))
  console.log(user.contains("Macumlba"))
  console.log(user.contains("React"))



  