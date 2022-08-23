const firstpromise = new Promise ((resolve,reject)=> {
    setTimeout(()=>{
        resolve(['Karisa',' Mugisha','Kanjenje','Kariza'])
    },3000)
    setTimeout(()=>{
        reject(" No Data Back From Server")
    },5000)
   
})
const Secondpromise = new Promise ((resolve,reject)=> {
    setTimeout(()=>{
        resolve(['Elic','Emaible','Elissa','Kessy'])
    },3000)
    setTimeout(()=>{
        reject(" No Data BAck From Server")
    },5000)
   
})
Promise.all([firstpromise,Secondpromise]).then(response => {
    const [names , surnames] = response
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const surname = surnames[i];
        console.log(`${name} ${surname}`)
        
    }
}).catch(error => {
    console.log(error)
})
