export default {
  state: {
    orders: []
  },
  mutations: {
    createOrder(state, payload) {
      state.orders.push(payload)
    }
  },
  actions: {
    async createOrder({commit}, {name, phone, adId, userId}) {
      console.log(name)
      console.log(phone)
      console.log(adId)
      console.log(userId)
      //Заглушка запроса
      let isRequestOk = true
      let promise = new Promise(function(resolve) {
        setTimeout(() => resolve('Done'), 3000);
      });
      if (isRequestOk) {
        await promise.then(()=> {
          //Здесь вызовем commit для добавления заказа
          commit('createOrder', {
            id: Math.random().toString(),
            name: name,
            phone: phone,
            adId: adId,
            userId: userId,
            done: false
          })
        })
      } else {
        await promise.then(()=> {
          throw 'Упс... Ошибка создания заказа'
        })
      }
    }
  },
  getters: {
    orders(state) {
      return state.orders
    }
  }
} 