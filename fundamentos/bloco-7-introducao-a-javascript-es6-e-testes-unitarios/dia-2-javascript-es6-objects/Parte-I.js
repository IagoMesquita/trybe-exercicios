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
        marguerita: {
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
    const entregador = order.order.delivery.deliveryPerson;
    const cliente = order.name;
    const foneCliente = order.phoneNumber;
    const endereço = `R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
    console.log(`Olá ${entregador}, entrega para: ${cliente}, Telefone: ${foneCliente}, ${endereço}.`);
 }

  customerInfo(order);
  
  const orderModifier = (order) => {
    const cliente = order.name = "Luiz Silva";                                                       //Como Object.keys devolve um array
    const pizzas = `${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} `;    //acessamos através do índece.  
    const bebida = order.order.drinks.coke.type;
    const pagamento = order.payment.total = 50;    
    console.log(`Olá ${cliente}, o total do seu pedido de ${pizzas} e ${bebida} é R$${pagamento},00.`);
 }
  
  orderModifier(order);