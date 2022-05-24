const hours= document.querySelector('.hours')
const minutes= document.querySelector('.minutes')
const seconds= document.querySelector('.seconds')
const ampm= document.querySelector('.ampm')

const updateTime=()=>{
let thours= new Date().getHours()
let tmin= new Date().getMinutes()
let tsec= new Date().getSeconds()
let ampm ='Am'
if(thours>12){
    thours=thours-12
    ampm='Pm'
    hours.innerHTML=thours
    minutes.innerHTML=tmin
    seconds.innerHTML=tsec
    setTimeout(()=>updateTime(),1000)
}
}
updateTime()