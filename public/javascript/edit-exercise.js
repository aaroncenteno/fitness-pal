const { create } = require("express-handlebars");

async function editExerciseFormHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]
    const gym = document.querySelector("#gym").value.trim();
    const noGym = document.querySelector("#nogym").value.trim();
    const upperBody = document.querySelector("#upper").value.trim();
    const lowerBody = document.querySelector("lower").value.trim();
    const sets = document.querySelector("sets-number").value.trim();
    const reps = document.querySelector("reps-number").value.trim();

    if (gym && noGym && upperBody && lowerBody && sets && reps) {
        const response = await fetch (`/api/create-exercise/${id}`, {
            method: 'PUT',
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
        if (response.ok) {
            document.location.replace('/')
        } else {
            console.log(response.statusText);
        }
    }
};

jQuery(function ($) {
    var checkList = $('.dropdown-check-list');
    checkList.on('click', 'span.anchor', function(event){
        var element = $(this).parent();

        if (element.hasClass('visible'))
        {
            element.removeClass('visible');
        } else {
            element.addClass('visible');
        }
    });
});

document.querySelector('.user-info-form').addEventListener('submit', editExerciseFormHandler);