// //1
// const available_spots = (arr,num) => {
//  const even = (n) => (n % 2 === 0)
 
// const arr_string = arr.join('')
//  let str = ''
//  let liked_spots = 0

//  for(let i=0 ; i<arr_string.length ; ++i) { 
  
//   if(i != arr_string.length - 1) str += (arr_string[i]+' ')

//   else str+=arr_string[i] }

//   const arr_with_num = str.split('').map(i => i === ' ' ? num : Number(i))

//   if(even(num)) {
// for(let i = 0;i<arr_with_num.length;++i) {

//  if(arr_with_num[i] === num && (even(arr_with_num[i-1]) || even(arr_with_num[i+1]))) liked_spots++
// }
//   }

//   else {
//    for(let i = 0;i<arr_with_num.length;++i) {

//     if(arr_with_num[i] === num && (!even(arr_with_num[i-1]) || !even(arr_with_num[i+1]))) liked_spots++
//   }
//  }

//   return liked_spots

// }


// //2
// const clean_up = (projects,method) => {
 
//  const arr = []
 
//  if(method === 'prefix') {
//  const arr_pre = Array.from(new Set(projects.map(i => (i.slice(0,i.indexOf('.'))))))

// for(let project of arr_pre) {
//  arr.push(projects.filter(i => (i.slice(0,i.indexOf('.')) === project)))

// }

// return arr;
//  }

//  //if not, we know the method must be suffix

//  else {
//   const arr_pre = Array.from(new Set(projects.map(i => (i.slice(i.indexOf('.'))))))

//   for(let project of arr_pre) {
//    arr.push(projects.filter(i => (i.slice(i.indexOf('.')) === project)))
  
//   }

//   return arr
//  }
// }


// //3
// const doesTriangleFit = (first,second) => {
//  return (first.join('') === Array(3).fill(first[0]).join('') &&  second.join('') === Array(3).fill(second[0]).join('')) && (second[0] >= first[0])
// }

// //4//not done
// const zeroesToEnd = (arr) => {
//  for(let i=0;i<arr.length;i++) {
//   if(arr[i] === 0) {
//    arr.push(arr[i])
//    arr.splice(arr.indexOf(arr[i],i),1)
   
//   }

  
//  }

//  return arr
// }

// //5//not done
// const analyzeContent = (string) => {
//  const textObject = {
//   contentType: 'TEXT',
//   lineNumber:0
//  }

//  const htmlObject = {
// contentType: 'HTML',
// tags: {

// }
//  }

// const cssObject = {
//  contentType: 'CSS',
//  cssTargets: {

//  }
// }

// if (/(?:\s*\S+\s*{[^}]*})+/.test(string)) {
//  const cssArr = string.split(' ').map(i => i.slice(0,i.indexOf('{')))
//  const uniques = Array.from(new Set(cssArr))
//  for(let i=0;i<uniques.length;++i) {
//   cssObject.cssTargets[uniques[i]] = cssArr.filter(a => (a === uniques[i])).length
//  }

//  return cssObject
// }

// else if (/<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/i 
// .test(string)) {

// }

// else {
//  textObject.lineNumber = string.split("\n").length

//  return textObject
// }


//  }



// //6
// const flame = (fName,sName) => {
//  const arr = []

//  const flameObj = {
//   F : 'Friends',
//   L : 'Lovers',
//   A : 'Affectionate',
//   M : 'Married',
//   E : 'Enemies'
//  }
//  const sortedF = fName.split('').filter(i => !sName.includes(i) && !sName.includes(i.toLowerCase())).join('')//cancelling out common letters in the names
//  const sortedS = sName.split('').filter(i => !fName.includes(i) && !fName.includes(i.toLowerCase())).join('')//same as above
// const joined = sortedF + sortedS

// for(let i in joined) {
//  arr.push('FLAME')
// }

// return flameObj[arr.join('')[joined.length-1]]
// }

// function domainName(url){

//  if(url.includes('www.')) {
//   if(url.includes('https://') || url.includes('http://'))
//    return url.slice(url.indexOf('.')+1,('abcd'+url.slice(url.indexOf('.')+1)).indexOf('.'))
//  }
 
//  else {
//    return url.slice(url.indexOf('//')+2,url.indexOf('.'))
//  }


// }

// console.log(domainName('https://www.cnet.com'))

// const twoAdd = (arr,target) => {
//  const first_num = arr.find(i => arr.some(o => o+i === target))
//  const second_num = arr.find(i => i+first_num === target)

//  return [arr.indexOf(first_num),arr.indexOf(second_num)]
// }

// const median = (num1,num2) => {
//  const joined = num1.concat(num2).sort()

//  if(joined.length%2 === 0) {
// return (joined[joined.length/2] + joined[joined.length/2 - 1])/2
//  }

//  else {
// return joined[Math.floor(joined.length/2)]
//  }

// }

// const longestPalindromicString = (str) => {
//  const revStr = str.split('').reverse().join('')
// let r = ''

// for(let i=0;i<str.length;i++) {
//  if(str[i] === revStr[i]) {
//   r+=str[i]
//  }
// }

// console.log(r)
// }

//sum of the squares of two numbers

function sumSquares(n1,n2) {
 return Math.pow(n1,2) + Math.pow(n2,2)
}

console.log(sumSquares(2,3))
 


