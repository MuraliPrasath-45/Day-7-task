1. a).  //var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    var result_asia=res.filter((ele)=>ele.region=="Asia");
    console.log(result_asia);
}//


b). //var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    var result_pop=res.filter((ele)=>ele.population<200000);
    console.log(result_pop);
}
    //


d).  //var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    var total_pop=res.reduce((acc,cv)=>acc+cv.population,0)
    console.log(total_pop);
}
    //
