let days = $('.days')
let hours =$('.hours')
let mins = $('.mins')
let secs =$('.secs')

const controlTime  = (secs,mins,hours) => {
 setInterval( () => {

  if(secs.text() > 0) {
  secs.text(secs.text()-1)
  }

  else {
   secs.text(59)

   if(mins.text() > 0) { 
    mins.text(mins.text()-1)
   }

   else {
    mins.text(59)
    if(hours.text() > 0) {
     hours.text(hours.text()-1)
    }

    else {
     hours.text(23)
     days.text(days.text()-1)
    }
   }
   
  
  }

 },100)




 

 // if(mins === 0) {
 //  hours--
 //  mins=60
 // }
}
// const daysLeft = 11 - new Date().getDate()
// days.text(daysLeft < 10 ? `0${daysLeft}`:daysLeft)
// console.log(new Date().getDate());

// controlTime(secs,mins,hours)

// secs.text(secs.text()-1)

// setTimeout(() => {
//  secs.text(secs.text()-1)
// },1000)

controlTime(secs,mins,hours)
