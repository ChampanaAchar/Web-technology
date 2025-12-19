async function getData(){
    setTimeout(async()=>{
 const response = await fetch("https://dummyjson.com/quotes");
    const data=await response.json();
    console.log(data);
    },1000)
   
}
getData();