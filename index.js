let question = document.getElementById('ques');
let question2 = document.getElementById('ques2');
let question3= document.getElementById('ques3');
let question4 = document.getElementById('ques4');
let question5 = document.getElementById('ques5');
let paragraph = document.getElementById('para');
let paragraph2 = document.getElementById('para2');
let paragraph3 = document.getElementById('para3');
let paragraph4 = document.getElementById('para4');
let paragraph5 = document.getElementById('para5');
let arrowDown = document.querySelectorAll('.down');


question.onclick = function(){ 
    paragraph.classList.toggle('hide');
}
question2.onclick = function(){ 
    paragraph2.classList.toggle('hide');
}
question3.onclick = function(){ 
    paragraph3.classList.toggle('hide');
}
question4.onclick = function(){ 
    paragraph4.classList.toggle('hide');
}
question5.onclick = function(){ 
    paragraph5.classList.toggle('hide');
}