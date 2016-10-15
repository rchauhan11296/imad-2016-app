//counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
    // create a request to the counter end point
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
var list ='';
var names=['name1','name2','name3'];
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
 var nameval = document.getElementById('name');
 var nameis = nameval.value;
    
 var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState=== XMLHttpRequest.DONE){
        //take some action
            if(request.status===200){
                var namearray = JSON.parse(request.responseText);
                var ul= document.getElementById('uno_list');
                
                for(var i=0;i<namearray.length;i++){
                ul.innerHTML='<li>'+namearray[i]+'</li>';
                }
            }
        }
        //not done yet
    };
    
    //make the request
    request.open('GET','http://rchauhan11296.imad.hasura-app.io/submit-name?name='+nameis,true);
    request.send(null);
};




