//counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
    // create a r equest to the counter end point
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState=== XMLHttpRequest.DONE){
        //take some action
            if(request.status===200){
                var counter = request.responseText;
                var span= document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //not done yet
    };
    
    //make the request
    request.open('GET','http://rchauhan11296.imad.hasura-app.io/counter',true);
    request.send(null);
};

// submit name
var nameval = document.getElementById('name').value;
console.log(nameval);