async function generateWorkoutFormHandler(event) {
    event.preventDefault();


    const exercise_list_array = Array
        .from(document.querySelectorAll('option'))
        .filter((option) => option.checked)
        .map((option) => option.value);
    const exercise_list = exercise_list_array.join(",");

    // const numbOfEx = document.querySelector("#numbOfEx").value.trim();
    // const level = document.querySelector("#level-list").value.trim();
    // const gym = document.querySelector("#gym-list").value.trim();
    // const body = document.querySelector("#body-list").value.trim();
    // const exercises = document.querySelector("user-created").value.trim();

    if (exercise_list) {
        console.log(exercise_list);
        const response = await fetch('/workout', {
            method: 'POST',
            body: JSON.stringify({
                numbOfEx,
                level,
                gym,
                body,
                exercises
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            document.location.replace('/workout')
        } else {
            console.log(response.statusText);
        }
    }
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