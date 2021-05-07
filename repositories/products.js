const fs = require('fs');
const util = require('util');
const Repository = require('./repository')

class ProductsRepository extends Repository{
    
}

module.exports = new ProductsRepository('products.json')