async function searchResultsHandler(event) {
    event.preventDefault();

    const gym_no_gym = document.querySelector('input[name="gym-no-gym-option"]:checked').value;
    const upper_lower = document.querySelector('input[name="body-option"]:checked').value;
    const fitness_level = document.querySelector('input[name="level-option"]:checked').value;
    const date_time = new Date();

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

        section_html = document.querySelector('.results');
        section_html.appendChild(result_section);

    })
}

async function saveWorkoutHandler(event) {
    event.preventDefault();

    console.log("save was clicked");

    // const nodesArray = Array.prototype.slice.call(document.querySelectorAll('.result-section'));

    // const date_time = new Date();
    // console.log(date_time);

    const exercise_list = null;
    const personal_list = null;
    // const exercise_list = [];

    // console.log(nodesArray);
    // saved_results.forEach(function(each_exercise) {
    //     const each = JSON.stringify(each_exercise);
    //     exercise_list.push(each_exercise);
    // })

    // console.log(exercise_list);

    const workoutResponse = await fetch('/api/exercises/workout', {
        method: 'POST',
        body: JSON.stringify({
            exercise_list,
            personal_list
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(workoutResponse.ok) {
        console.log('data was saved');
        document.location.replace('/dashboard');
    }

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
document.querySelector('.exercise-save-btn').addEventListener('click', saveWorkoutHandler);