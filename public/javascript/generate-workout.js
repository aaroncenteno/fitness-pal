const completeBtn = document.querySelector('.complete-workout-btn');
const refreshBtn = document.querySelector('.refresh-search-btn');
const generateForm = document.querySelector('.generate-workout-form')

async function generateWorkoutFormHandler(event) {
    event.preventDefault();

    const numbOfEx = document.querySelector("#numbOfEx").value 
    const level = document.querySelector("#level-list").value
    const gym = document.querySelector("#gym-list").value 
    const body = document.querySelector("#body-list").value
    const generatedWorkoutEl = document.querySelector('.generated-workout');


        const response = await fetch('/api/exercises/?fitness_level='+ level + '&gym_no_gym=' + gym + '&upper_lower=' + body,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
        generatedWorkoutEl.classList.remove('hide');
        completeBtn.classList.remove('hide');
        refreshBtn.classList.remove('hide');
        generateForm.classList.add('hide');
            const randomNumbers = []


            for( i =0; i < numbOfEx; i ++) {
                let generatedNumber = data[Math.floor(Math.random() * data.length)]
                if (!randomNumbers.includes(generatedNumber)) {
                    const exercsieEl = document.createElement('div')
                    const exerciseName = document.createElement('div')
                    const exerciseInstructions = document.createElement('div')
                    randomNumbers.push(generatedNumber)
    
                    exercsieEl.setAttribute('class', 'generatedExercise')
                    exerciseName.setAttribute('class', 'generated-exercise-name')
                    exerciseInstructions.setAttribute('class', 'generated-exercise-instructions')
    
                    exerciseName.innerHTML = generatedNumber.exercise_name
                    exerciseInstructions.innerHTML = generatedNumber.instructions
                    
                    exercsieEl.appendChild(exerciseName);
                    exercsieEl.appendChild(exerciseInstructions);
                    generatedWorkoutEl.appendChild(exercsieEl);
                } else {
                    let generatedNumber = data[Math.floor(Math.random() * data.length)]
                    const exercsieEl = document.createElement('div')
                    const exerciseName = document.createElement('div')
                    const exerciseInstructions = document.createElement('div')
                    console.log(generatedNumber)
                    console.log(randomNumbers);
                    randomNumbers.push(generatedNumber)
    
                    exercsieEl.setAttribute('class', 'generatedExercise')
                    exerciseName.setAttribute('class', 'generated-exercise-name')
                    exerciseInstructions.setAttribute('class', 'generated-exercise-instructions')
    
                    exerciseName.innerHTML = generatedNumber.exercise_name
                    exerciseInstructions.innerHTML = generatedNumber.instructions
                    
                    exercsieEl.appendChild(exerciseName);
                    exercsieEl.appendChild(exerciseInstructions);
                    generatedWorkoutEl.appendChild(exercsieEl);
                }
            }
        })
}

async function completeWorkoutHandler(event) {
    event.preventDefault();

    const response = await fetch('/api/exercises/workout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    
    if(response.ok) {
        document.location.replace('/dashboard')
        console.log('workout Stored!')
    }
}

function refreshWorkoutPage(event) {
    event.preventDefault();

    document.location.reload();
}
// jQuery(function ($) {
//     var checkList = $('.dropdown-check-list');
//     checkList.on('click', 'span.anchor', function(event) {
//         var element = $(this).parent();

//         if(element.hasClass('visible'))
//         {
//             element.removeClass('visible');
//         } else {
//             element.addClass('visible');
//         }
//     });
// });

document.querySelector('.generate-workout-form').addEventListener('submit', generateWorkoutFormHandler);
if(completeBtn) {
    document.querySelector('.complete-workout-btn').addEventListener('click', completeWorkoutHandler);
    document.querySelector('.refresh-search-btn').addEventListener('click', refreshWorkoutPage);
}
