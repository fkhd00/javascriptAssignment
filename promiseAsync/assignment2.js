function getData(uId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetched the data!");
            resolve(`${uId}@gmail.com`);
            reject(new Error("error"));
        },4000);
    });
}

console.log("start");
getData("skc")
    .then(email=>{
        console.log("Email id of the user is : "+email);
    })
    .finally(()=>console.log("end"))
    .catch(err=>console.error(err));