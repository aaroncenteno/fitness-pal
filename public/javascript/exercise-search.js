const refreshBtn = document.querySelector('.refresh-exerciseSearch-btn')
const exerciseSearchForm = document.querySelector('.exercise-search-form')
async function searchResultsHandler(event) {
    event.preventDefault();

    const gym_no_gym = document.querySelector('input[name="gym-no-gym-option"]:checked').value;
    const upper_lower = document.querySelector('input[name="body-option"]:checked').value;
    const fitness_level = document.querySelector('input[name="level-option"]:checked').value;

    const response = await fetch('api/exercises/search/', {
        method: 'POST',
        body: JSON.stringify({
            gym_no_gym,
            upper_lower,
            fitness_level
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    .then(response => response.json())
    .then(result => {
        console.log(result);
        refreshBtn.classList.remove('hide')
        exerciseSearchForm.classList.add('hide')

        // section container for all results
        const result_section = document.createElement('section');
        result_section.setAttribute("class", "result-section");

        for(i = 0; i < result.length; i++) {
            const exercise_id = result[i].id;
            const exercise_name = result[i].exercise_name;
            const exercise_instructions = result[i].instructions;

            // div container for each result
            const result_div = document.createElement('div');
            result_div.setAttribute("id", exercise_id);
            result_div.setAttribute("class", "result-div");

            // p container for each result's name
            const result_name = document.createElement('p');
            result_name.setAttribute("class", "exercise-name");
            result_name.innerHTML = exercise_name;

            // p container for each result's instructions
            const result_instructions = document.createElement('p');
            result_instructions.setAttribute("class", "exercise-instructions");
            result_instructions.innerHTML = exercise_instructions;

            // append result containers
            result_div.appendChild(result_name);
            result_div.appendChild(result_instructions);
    
            // append result to section container
            result_section.appendChild(result_div);
        }

        section_container = document.querySelector('#section-results');
        section_container.setAttribute("class", "exercise-search-results");

        title_container = document.querySelector('.search-result-title');
        title_container.innerHTML = "Exercise Search Results";

        div_html = document.querySelector('.results');
        div_html.appendChild(result_section);
    
    })
}

// async function saveWorkoutHandler(event) {
//     event.preventDefault();

//     const nodesArray = Array.prototype.slice.call(document.querySelectorAll('.result-div'));
    
//     // const exercise_list = null;
//     const personal_list = null;
//     const exerciseListArray = [];

//     for (i = 0; i < nodesArray.length; i++) {
//         const exerciseResult = nodesArray[i].getAttribute("id");
//         exerciseListArray.push(exerciseResult);
//     }

//     const exercise_list = exerciseListArray.join(', ');

//     const response = await fetch('/api/exercises/workout', {
//         method: 'POST',
//         body: JSON.stringify({
//             exercise_list,
//             personal_list
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     if(response.ok) {
//         console.log('data was saved');
//         document.location.replace('/dashboard/workout');
//     }

// }    

refreshExerciseSearch = function(event) {
    document.location.reload()
}

jQuery(function ($) {
    var checkList = $('.dropdown-check-list');
    checkList.on('click', 'span.anchor', function (event) {
        var element = $(this).parent();

        if (element.hasClass('visible')) {
            element.removeClass('visible');
        }
        else {
            element.addClass('visible');
        }
    });
});

document.querySelector('.exercise-search-form').addEventListener('submit', searchResultsHandler);
if(refreshBtn) {
    document.querySelector('.refresh-exerciseSearch-btn').addEventListener('click', refreshExerciseSearch);
}
// document.querySelector('.exercise-save-btn').addEventListener('click', saveWorkoutHandler);