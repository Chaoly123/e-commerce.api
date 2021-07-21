// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo (Category, {
  through: {

    // Categories have many Products
    model: Product,
    unique: false
  },
});

location.belongsToMany(ProductTag, {
    // Products belongToMany Tags (through ProductTag)
  through: {
    model: ProductTag,
    unique: false
  },
  // Tags belongToMany Products (through ProductTag)
    as: 'category__product'
});
  module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};
