// Specification pattern

let Color = Object.freeze({
  red: 'red',
  green: 'green',
  blue: 'blue',
});

let Size = Object.freeze({
  small: 'small',
  medium: 'medium',
  large: 'large',
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

//open for extension, closed for modification

class ProductFilter {
  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }
  filterBySize(products, size) {
    return products.filter((p) => p.size === size);
  }
  filterBySizeAndColor(products, size, color) {
    return products.filter((p) => p.size === size && p.color === color);
  }
  //state space explosion
  // 3 criteria = 7 methods
}

// specification
class Specification {
  constructor() {
    if (this.constructor.name === 'Specification')
      throw new Error('Specification is abstract');
  }

  isSatisfied(item) {
    console.log('isSatisfied derived');
  }
}

class ColorSpecification2 extends Specification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every((x) => x.isSatisfied(item));
  }
}

let apple = new Product('apple', Color.green, Size.small);
let tree = new Product('tree', Color.green, Size.large);
let house = new Product('house', Color.blue, Size.large);

let products = [apple, tree, house];

let pf = new ProductFilter();
console.log(`Green products (old):`);
for (let p of pf.filterByColor(products, Color.green)) {
  console.log(` * ${p.name} is green`);
}

class BetterFilter {
  filter(items, spec) {
    return items.filter((x) => spec.isSatisfied(x));
  }
}

let bf = new BetterFilter();
console.log('Green products (new):');
for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
  console.log(` * ${p.name} is green`);
}

console.log('Large and Green products (new):');
let specs = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
);
for (let p of bf.filter(products, specs)) {
  console.log(` * ${p.name} is large and green`);
}
