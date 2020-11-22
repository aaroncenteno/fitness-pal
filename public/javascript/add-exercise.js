async function createExerciseFormHandler(event) {
    event.preventDefault();

    const gym = document.querySelector("#gym").value.trim();
    const noGym = document.querySelector("#nogym").value.trim();
    const upperBody = document.querySelector("#upper").value.trim();
    const lowerBody = document.querySelector("lower").value.trim();
    const sets = document.querySelector("sets-number").value.trim();
    const reps = document.querySelector("reps-number").value.trim();

    if (gym && noGym && upperBody && lowerBody && sets && reps) {
        const response = await fetch('/api/create-exercise/', {
            method: 'POST',
            body: JSON.stringify({
                gym,
                noGym,
                upperBody,
                lowerBody,
                sets,
                reps
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
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