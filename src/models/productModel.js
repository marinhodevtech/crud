class ProductModel {
  constructor() {
    this.products = [];
    this.currentId = 1;
  }

  findAll() {
    return this.products;
  }

  findById(id) {
    return this.products.find(p => p.id === parseInt(id));
  }

  create(data) {
    const newProduct = {
      id: this.currentId++,
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id, data) {
    const index = this.products.findIndex(p => p.id === parseInt(id));
    if (index === -1) return null;

    this.products[index] = {
      ...this.products[index],
      ...data,
      updatedAt: new Date()
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex(p => p.id === parseInt(id));
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }
}

module.exports = new ProductModel();
