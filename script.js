// 1. a).Countries from Asia Continent using filter()
    var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    var result_asia=res.filter((ele)=>ele.region=="Asia");
    console.log(result_asia);
}


// b). Countries with pop of <2lakhs using filter()
    var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    var result_pop=res.filter((ele)=>ele.population<200000);
    console.log(result_pop);
}

// c). print name ,cap,flag using foreach()
    var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   result.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
}


// d). total pop of countries using reduce()
    var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    var total_pop=res.reduce((acc,cv)=>acc+cv.population,0)
    console.log(total_pop);
}

// e). country uses USD as currencies
    var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    var res=JSON.parse(req.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].symbol === "$"){
            return element;
        }
     }
   })
        console.log(currency);
    }
