let createElement = ()=> document.createElement('div');

function appendElement(createElement){
    let element=createElement();
    document.getElementById("simplediv").appendChild(element);
}
appendElement(createElement);