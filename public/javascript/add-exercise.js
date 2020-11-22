async function createExerciseFormHandler(event) {
    event.preventDefault();

    const exercise_name = document.querySelector("input[name='exercise-name'").value.trim();
    const gym_no_gym = document.querySelector("input[name=gym-no-gym]:checked").value;
    const upper_lower = document.querySelector("input[name='upper-lower-body']:checked").value;
    const fitness_level = document.querySelector("input[name='levels']:checked").value;
    const instructions = document.querySelector("textarea[name='exercise-instructions'").value.trim();

    if (exercise_name && gym_no_gym && upper_lower && fitness_level && instructions) {
        const response = await fetch('/api/exercises/personal', {
            method: 'POST',
            body: JSON.stringify({
                exercise_name,
                gym_no_gym,
                upper_lower,
                fitness_level,
                instructions,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.ok) {
            window.location.replace('/dashboard/personal-exercise')
        }
    }
}

jQuery(function ($) {
    var checklist = $('.dropdown-check-list');
    checklist.on('click', 'span.anchor', function(event){
        var element = $(this).parent();
        
        if (element.hasClass('visible'))
        {
            element.removeClass('visible');
        } else {
            element.addClass('visible');
        }
    });
});

document.querySelector('.create-exercise-form').addEventListener('submit', createExerciseFormHandler);