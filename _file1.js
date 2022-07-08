function Test1() {
  const name = 'lemon';

  return {
    f1: function () {
      return 'Do something' + this.name;
    },
    f2: function () {
      return 'Do something';
    },
    f3: function () {
      return 'Do something';
    },
  };
}

function Test2() {
  const name = 'orange';

  this.f1 = function () {
    return 'Do something' + this.name;
  };

  this.f2 = function () {
    return 'Do something';
  };

  this.f3 = function () {
    return 'Do something';
  };
}

let test1 = new Test1();
let test2 = new Test2();

console.log('test1', test1);
console.log('test2', test2);

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }
}
