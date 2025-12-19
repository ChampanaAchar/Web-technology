function greetLater(name,callback){
    setTimeout(()=>{
        const message="Hello ,"+name;
        callback(message)
    },1000);
    }
console.log("Start");
greetLater("Champs",function(msg){
    console.log(msg);
});