const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const order1 = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, ${order.address.street}, nº${order.address.number}, ${order.address.apartment}`;
  console.log(order1);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const total = order.order.pizza.margherita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price;
  const order2 = `Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de margherita, pepperoni e coca-cola zero é R$ ${total}`
  console.log(order2);
}

orderModifier(order);
