async function getPromise(name){
 return new Promise((success,fail)=>{
    setTimeout(()=>{
        if(!name) return fail("Name is required");
        success("Hello ,"+name);
    },900);
 });
}

async function runAsyncAwait(){
    try{
        const msg=await getPromise("Indira");
        console.log(msg);
    }catch(err){
        console.log("Error:",err);
    }
}
runAsyncAwait();