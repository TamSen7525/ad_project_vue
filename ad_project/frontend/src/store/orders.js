class Order {
  constructor(name, phone, adId, userId, done = false, id = null) {
    this.name = name
    this.phone = phone
    this.adId = adId
    this.userId = userId
    this.done = done
    this.id = id
  }
}

export default {
  state: {
    orders: [
      new Order("Костя", "+7(978)000-00-05", "1", "1", true, "123"),
      new Order("Мария", "+7(978)111-22-33", "2", "1", false, "124"),
      new Order("Алекс", "+7(978)444-55-66", "3", "1", false, "125")
    ]
  },
  mutations: {
    createOrder(state, payload) {
      state.orders.push(payload)
    }
  },
  actions: {
    async createOrder({commit}, {name, phone, adId, userId}) {
      let payload = new Order(name, phone, adId, userId, false, Math.random())
      //Заглушка запроса
      let isRequestOk = true
      let promise = new Promise(function(resolve) {
        setTimeout(() => resolve('Done'), 3000);
      });
      if (isRequestOk) {
        await promise.then(()=> {
          //Здесь вызовем commit для добавления заказа
          commit('createOrder', payload)
        })
      } else {
        await promise.then(()=> {
          throw 'Упс... Ошибка создания заказа'
        })
      }
    }
  },
  getters: {
    orders (state, getters) {
      if (getters.user == null) return []
      return state.orders.filter(order => order.userId == getters.user.id)
    }
  }
} 