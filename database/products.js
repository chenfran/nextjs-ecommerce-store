import 'server-only';

const products = [
  {
    id: 1,
    subject: 'Chicken',
    price: 7.0,
    valuta: 'EUR',
    countInStock: 10,
    segue: '',
  },
  {
    id: 2,
    subject: 'Bonbon',
    price: 7.5,
    valuta: 'EUR',
    countInStock: 10,
    segue: '',
  },
  {
    id: 3,
    subject: 'Circle',
    price: 7.5,
    valuta: 'EUR',
    countInStock: 10,
    segue: '',
  },
  {
    id: 4,
    subject: 'Dino',
    price: 7.5,
    valuta: 'EUR',
    countInStock: 10,
    segue: '',
  },
  {
    id: 5,
    subject: 'Duck',
    price: 7.5,
    valuta: 'EUR',
    countInStock: 10,
    segue: '',
  },
  {
    id: 6,
    subject: 'Flowers',
    price: 7.5,
    valuta: 'EUR',
    countInStock: 10,
    segue: '',
  },
  {
    id: 7,
    subject: 'Line',
    price: 7.5,
    valuta: 'EUR',
    countInStock: 10,
    segue: '',
  },
  {
    id: 8,
    subject: 'Panda',
    price: 7.5,
    valuta: 'EUR',
    countInStock: 10,
    segue: '',
  },
  {
    id: 9,
    subject: 'Parrot',
    price: 7.5,
    valuta: 'EUR',
    countInStock: 10,
    segue: '',
  },
  {
    id: 10,
    subject: 'Strawberry',
    price: 7.5,
    valuta: 'EUR',
    countInStock: 10,
    segue: '',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
