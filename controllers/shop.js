const Product = require('../models/product');

exports.Programare = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/programare', {
        prods: products,
        pageTitle: 'Programare',
        path: '/Programare'
      });
    })
    .catch(err => {
      console.log(err);
    });
};
exports.Contact = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/contact', {
        prods: products,
        pageTitle: 'Contact',
        path: '/Contact'
      });
    })
    .catch(err => {
      console.log(err);
    });
};
exports.Calculator = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/calculator', {
        prods: products,
        pageTitle: 'Calculator',
        path: '/Calculator'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'ITP G.',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};
