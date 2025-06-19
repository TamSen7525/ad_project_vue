export default {
state: {
ads:[
{
title:"First",
desc:"First Desc",
promo: true,
src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
id:"1",
ownerId: "1"
},
{
title:"Second",
desc:"Second Desc",
promo: true,
src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
id:"2",
ownerId: "2"
},
{
title:"Third",
desc:"Third Desc",
promo: true,
src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
id:"3",
ownerId: "1"
},
{
title:"Fourth",
desc:"Fourth Desc",
promo: true,
src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
id:"4",
ownerId: "3"
}
]
},
mutations: {
createAd(state, payload){
state.ads.push(payload)
},
loadAds (state, payload) {
state.ads = payload
},
updateAd (state, {title, desc, id}) {
const ad = state.ads.find(a => {
return a.id === id
})
ad.title = title
ad.desc = desc
}
},
actions: {
createAd({commit},payload){
payload.id = Math.random()
commit('createAd', payload)
},
async updateAd ({commit},{title,desc,id}) {
//Заглушка запроса
let isRequestOk = true
let promise = new Promise(function(resolve) {
resolve('Done')
});
if (isRequestOk) {
await promise.then(()=> {
commit('updateAd',{ title, desc, id})
})
} else {
await promise.then(()=> {
throw 'Упс... Ошибка редактирования объявления'
})
}
}
},
getters: {
ads(state) {
return state.ads
},
promoAds(state) {
return state.ads.filter(ad => {
return ad.promo
})
},
myAds(state) {
return state.ads
},
adById(state) {
return id => {
return state.ads.find(ad => ad.id == id)
}
}
}
} 