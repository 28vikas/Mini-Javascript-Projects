let questions = [{
    'que': 'What is the captal of India ?',
    'a': 'Rohtak',
    'b': 'Delhi',
    'c': 'Chandigarh',
    'd': 'Gurgaon',
    'correct': 'b'
},
{
    'que': 'Who is the Prime Minister of India ?',
    'a': 'Kejriwal',
    'b': 'Pappu',
    'c': 'Narendra Modi',
    'd': 'Rajnath Singh',
    'correct': 'c'
},
{
    'que': 'Where is Taj Mahal Situated ?',
    'a': 'Agra',
    'b': 'Haridwar',
    'c': 'Bhiwani',
    'd': 'Rewari',
    'correct': 'a'
}]


let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

let quesBox = document.getElementById('quesBox');
let optionInputs = document.querySelectorAll(".options");

let loadQues = () => {
    if (index === total) {
        return endQuiz();
    }

    reset();
    let data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

let submitQuiz = () => {
    let data = questions[index];
    let ans = getAnswer();
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQues();
    return;
}

let getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

let reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

let endQuiz = () => {
    document.getElementById("box").innerHTML = `
<h3>Thank You for playing the quiz</h3>
<h2> ${right}/${total} are correct </h2>
`
}

loadQues()