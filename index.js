let consoleFormEle = document.getElementById("consoleForm");
let requestUrlEle = document.getElementById("requestUrl");
let requestUrlErrMsgEle = document.getElementById("requestUrlErrMsg");
let requestMethodEle = document.getElementById("rquestMethod");
let requestBodyEle = document.getElementById("requestBody");
let responseStatusEle = document.getElementById("responseStatus");

function checkRequestUrl(){
    if(requestUrlEle.value ===  ""){
        requestUrlErrMsgEle.textContent ="Required";
        requestUrlErrMsgEle.classList.add("error-message");

    }else{
        requestUrlErrMsgEle.textContent = "";
    }
}

let formData = {
    requestUrl:'https://gorest.co.in/public-api/users',
    requestMethod:'POST',
    requestBody:''
}

requestUrlEle.addEventListener("change",function(event){
    formData.requestUrl = event.target.value;
})

requestMethodEle.addEventListener("change",function(event){
    formData.requestMethod = event.target.value;
})
responseBodyEle.addEventListener("change",function(event){
    formData.requestBody = event.target.value;
})

function sendHttpRequest(){
    let {
        requestUrl,
        requestMethod,
        requestBody

    } = formData;
   let url = requestUrl;
   let options = {
    method: requestMethod,
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 45766e932417d161b6b1b4b6232c0d934c13bd9b8cb1c7a608118be727dbf040"
    },
    body:requestBody
   };
   fetch(url,options)
   .then(function(response){
    return response.json();
   })
   .then(function(jsonData){
    let responseStatus = jsonData.code;
    responseStatusEle.value = responseStatus;
    responseBodyEle.textContent = JSON.stringify(jsonData);
   })
}

consoleFormEle.addEventListener("submit",function(event){
    event.preventDefault();
    checkRequestUrl();
    sendHttpRequest();
})