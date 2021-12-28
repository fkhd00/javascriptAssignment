function TestObject(id){
    this.id=id;
}

TestObject.prototype.testFunction=()=>{
    console.log("this is a test function");
};
let test=new TestObject("testId");
console.log(test.id);
test.testFunction();

let obj={
    id:"someid"
}
console.log(obj.id);