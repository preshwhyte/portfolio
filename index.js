// let persons=['jane','dele', 'mario']

// persons.forEach(person=>{
//     person +=' phD'
//     console.log(person)
// })

// let link=document.querySelector('a');

// console.log(link.getAttribute('href'))

// link.classList.toggle('jeff')
// link.classList.toggle('jeff')

// let hans=document.querySelectorAll('p');

// hans.forEach(hans=>{
//     if (hans.textContent.includes('error')){
//         hans.classList.add('jeff')
//     }
// })

// let shan=[
//     {title:'one', body:'the firt'},
//     {title:'two', body:'the second'}

// ]

// function get(){
//     setTimeout(()=>{
//         let ban='';
//         shan.forEach((shanx)=>{
//             ban +=`<p>${shanx.title}</p>`
            
//         })
//         document.getElementById('book').innerHTML=ban
//         console.log(ban)
//     },1000)

// }
// function cget(shanx, callback){
//     setTimeout(()=>{
//         shan.push(shanx);
//         callback()

//     },2000)

// }


// cget({title:'three', body:'the third'}, get)

let shan=[
    {title:'one', body:'the firt'},
    {title:'two', body:'the second'}

]

function get(){
    setTimeout(()=>{
        let ban='';
        shan.forEach((shanx)=>{
            ban +=`<p>${shanx.title}</p>`
            
        })
        document.getElementById('book').innerHTML=ban
        console.log(ban)
    },1000)

}
function cget(shanx){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        shan.push(shanx);
        
        const error=true;
        if(!error){
            resolve()
        }
        else{
            reject('Error: something went wrong')
        }

    },2000)
})
}


cget({title:'three', body:'the third'})

.then(get)
.catch(err=>console.log(err))

let x = 0;
//repeats action every second
let interval = setInterval(() => {
  //changes the percentage value every second
  document.querySelector("#percentage").textContent = x + "%";
  //increases the width of the bar every second
  document.querySelector("#progress-in").style.width = x + "%";
  //stops the interval
  if (x == 70) clearInterval(interval);
  //counts to hundred
  x+=5;
}, 1000);

let y = 0;
//repeats action every second
let interval1 = setInterval(() => {
  //changes the percentage value every second
  document.querySelector("#percentage1").textContent = y + "%";
  //increases the width of the bar every second
  document.querySelector("#progress-in1").style.width = y + "%";
  //stops the interval
  if (y == 80) clearInterval(interval1);
  //counts to hundred
  y+=5;
}, 1000);

let z = 0;
//repeats action every second
let interval2 = setInterval(() => {
  //changes the percentage value every second
  document.querySelector("#percentage2").textContent = z + "%";
  //increases the width of the bar every second
  document.querySelector("#progress-in2").style.width = z + "%";
  //stops the interval
  if (z == 70) clearInterval(interval2);
  //counts to hundred
  z+=5;
}, 1000);

let home=document.getElementById('home')


home.addEventListener('mouseover', play)

function play(){
    document.getElementById('span').classList.remove('span')

}
home.addEventListener('mouseout', play1)

function play1(){
    document.getElementById('span').classList.add('span')
    document.getElementById('span').style.border='white 2px solid'
    document.getElementById('span').classList.add('spec')

}

let count=0

let interval0=setInterval( function(){
    document.getElementById('num').textContent=`${count}+`
    if (count==5) clearInterval(interval0)
count++;
}, 100)

let count1=0

let interval01=setInterval( function(){
    document.getElementById('num1').textContent=`${count1}+`
    if (count1==32) clearInterval(interval01)
count1++;
}, 100)

let count2=0

let interval02=setInterval( function(){
    document.getElementById('num2').textContent=`${count2}+`
    if (count2==44) clearInterval(interval02)
count2++;
}, 100)