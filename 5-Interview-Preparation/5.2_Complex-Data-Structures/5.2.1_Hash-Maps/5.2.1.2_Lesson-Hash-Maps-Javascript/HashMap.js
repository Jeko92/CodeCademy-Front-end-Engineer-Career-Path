class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null);
  }

  // 2/10 Hashing
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }

    // 3/10 Compression
    hashCode = hashCode % this.hashmap.length;

    return hashCode;
  }

  // 4/10 Assign
  assign(key, value) {
    const arrayIndex = this.hash(key);
    this.hashmap[arrayIndex] = value;
  }

  // 5/10 Assign
  retrieve(key) {
    const arrayIndex = this.hash(key);
    return this.hashmap[arrayIndex];
  }
}

/* const myHashMap = new HashMap(3);
console.log(myHashMap.hash("id"));
console.log(myHashMap.hash("id")); */

const employees = new HashMap(3);
employees.assign("34-567", "Mara");
console.log(employees.hashmap);

const glossary = new HashMap(3);
glossary.assign("semordnilap", "Words that form different words when reversed");
console.log(glossary.retrieve("semordnilap"));

module.exports = HashMap;
