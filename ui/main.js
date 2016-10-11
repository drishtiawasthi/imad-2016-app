// Counter code
var button = document.getElementById('counter');
button.onclick = function () {
    
    //Submit name
var name = nameInput.value;
var submit =document.getElementById('submit_btn');
submit.onclick = function () {

    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
                //Capture a list of names and render it as a list
                var names = request.responseText;
                names= JSON.parse(names);
                var names =['name1', 'name2', 'name3', 'name4'];
                var list = '';
                for (var i=0; i<names.length; i++) {
                    list += '<li>' + name[i] + '<li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
               
            }
        }
        //Not done yet
    };
    
    //Make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://http://drishtiawasthi.imad.hasura.io/submit-name?name' + name, true);
    request.send(null);
};
