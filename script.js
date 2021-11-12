function check() {
 var c = 0;
 var q1 = document.quiz.question1.value;
 var q2 = document.quiz.question2.value;
 var q3 = document.quiz.question3.value;
 var q4 = document.quiz.question4.value;
 var q5 = document.quiz.question5.value;
 var result = document.getElementById('result');
 var quiz = document.getElementById("quiz");
 
if (q1=="flag2") {c++}
if (q2=="Portuguese") {c++}
if (q3=="Brasilia") {c++}
if (q4=="South America") {c++}
if (q5=="10") {c++}

if (c<=3) {
    result.textContent=`You scored ${c}. Do you want to know the correct answers and much more? Click here.`
    
} 
else {
    result.textContent=`WOW! You scored ${c}. Do you want to know more? Check here`
}

}
