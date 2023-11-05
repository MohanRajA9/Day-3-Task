const URL = "https://restcountries.com/v3.1/all"

const myReq = new XMLHttpRequest();

myReq.addEventListener("load", function () {
    const object = JSON.parse(this.response)
    for(let value of object){
        console.log(value.flags.png)
    }    
});
myReq.open("GET", URL );
myReq.send();
