const form = document.querySelector('.quiz-form')
const correctAnswers = ['A', 'B', 'A', 'A', 'A', 'C', 'B', 'B', 'C', 'B']
const result = document.querySelector('.result')
const resultFail = document.querySelector('.fail')
const pass = document.querySelector('.pass')
const fail = document.querySelector('.failedPercentage')
const submit = document.getElementById('button')


form.addEventListener('submit', e => {
    e.preventDefault()

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value,form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    //check answers///

    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 10;
        }
    });
    
    // show result on page//
    scrollTo(0, 0);
    
    
    

    //animating the score with setInterval
    let output = 0;
    const timer = setInterval(()=>{
        fail.textContent = (`${output}%`)
        pass.textContent = (`${output}%`);
        
        

        if(output === score){
            clearInterval(timer)
        } else {
            output++;
        }
    }, 30)

    if (score >= 50){
        result.classList.remove('d-none');
        
    } else if (score < 50){
        resultFail.classList.remove('d-none')
        
        
    }
    submit.disabled = true
   
});

/////window object (global object)/////

// window.console.log('hello')

// window.setTimeout(()=> {
//     alert('sup?')
// })

// setTimeout(()=> {
//     alert('sup?')
// }, 3000);