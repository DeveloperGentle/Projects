
const menuData = [{
 name:'Burger Lunch',
 price:'$15',
 category:'lunch',
 image:'burger lunch.webp',
 desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam.'
},
{
 name:'Burger and Cheese',
 price:'$20',
 category:'lunch',
 image:'burger cheese.webp',
 desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam.'
},
{
 name:'Buttermilk pancake',
 price:'$15.99',
 category:'breakfast',
 image:'burger cheese.webp',
 desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam.'
},
{
 name:'Godzilla Milkshake',
 price:'$6.99',
 category:'shakes',
 image:'starwberry shake.webp',
 desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam.'
},
{
 name:'Egg Attack',
 price:'$22.99',
 category:'lunch',
 image:'chips burger.webp',
 desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam.'
},
{
 name:'Sauce Pizza',
 price:'$20',
 category:'breakfast',
 image:'burger cheese.webp',
 desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam.'
},
{
 name:'Chips Burger',
 price:'$20',
 category:'lunch',
 image:'chips burger.webp',
 desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam.'
},
{
 name:'Country delight',
 price:'$20',
 category:'breakfast',
 image:'chips burger.webp',
 desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam.'
},
{
 name:'Bacon overflow',
 price:'$20',
 category:'breakfast',
 image:'chips burger.webp',
 desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam.'
}
]

const loadMenu = (decider,button) => {

 // $(button).css('background-color','#f0932b')
 // $(button).css('color','white')
 const data =  decider === 'All' ? menuData : decider === 'Breakfast' ? menuData.filter(data => (data.category === 'breakfast')):decider === 'Lunch'? menuData.filter(data => (data.category === 'lunch')):menuData.filter(data => (data.category === 'shakes'))


let output = '';
for(let element=0;element<data.length;element+=1) {

 let fElement = data[element]

output += `
 <section class="menu-layout d-flex justify-content-center">
  <div class="menu-con d-flex align-content-center gap-3">
 <img src="images/${fElement.image}" class="menu-img" alt="">
 <div>
  <p class="menu-title">${fElement.name}<span class="price">${fElement.price}</span></p>
 
 
  <p class="menu-desc">${fElement.desc}</p>
 </div>
  </div>
  
 </section>`
}
$('.menu').html(output)
}

loadMenu('All')


