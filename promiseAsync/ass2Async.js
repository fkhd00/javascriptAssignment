function getData(uId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetched the data!");
            resolve(`${uId}@gmail.com`);
            reject(new Error("error"));
        },4000);
    });
}
async function executeCode(){
    try{
        console.log("start");
        let email=await getData("skc");
        console.log("Email id of the user is : "+email);
        console.log("end");
    }
    catch(err){
        console.error(err);
    }

}
executeCode();