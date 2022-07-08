Journal.count = 0;

let j = new Journal();

j.addEntry('Some text 1');
j.addEntry('Some text 2');
j.addEntry('Some text 3');

j.removeEntry(3);

console.log(j.toString());
console.log(Journal.count);

let a = {
  2: 'b',
  3: 'c',
  magic: 'd',
};

console.log(a);

delete a['magic'];

console.log(a);
