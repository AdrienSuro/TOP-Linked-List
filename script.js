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
      return this.length
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
  console.info(user)
  user.prepend("CSS")
  console.info(user)
  user.prepend("Javascript")
  console.info(user)
  console.log(user.size());
  console.log(user.at(1))
  console.log(user.toString())
  user.append("React");
  console.log(user.toString())
  