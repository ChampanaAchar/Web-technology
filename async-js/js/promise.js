function getPromise(name){
 return new Promise((success,fail)=>{
    setTimeout(()=>{
        if(!name) return fail("Name is required");
        success("Hello ,"+name);
    },900);
 });
}

function runpromise(){
    getPromise("Veeksha")
    .then((msg)=>{
        console.log(msg);
    })
    .catch((err)=>{
        console.log("Error:",err);
    });
}
console.log("Start");
runpromise();