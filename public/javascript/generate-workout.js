async function generateWorkoutFormHandler(event) {
    event.preventDefault();

   alert("hi")
    // const exercise_list_array = Array
    //     .from(document.querySelectorAll('option'))
    //     .filter((option) => option.checked)
    //     .map((option) => option.value);
    // const exercise_list = exercise_list_array.join(",");

    const numbOfEx = document.querySelector("#numbOfEx").value 
    const level = document.querySelector("#level-list").value
    const gym = document.querySelector("#gym-list").value 
    const body = document.querySelector("#body-list").value
    // const exercises = document.querySelector("user-created").value 

    console.log( numbOfEx,
        level,
        gym,
        body)

 

        const response = await fetch('/api/exercises/workout', {
            method: 'POST',
            body: JSON.stringify({
                numbOfEx,
                level,
                gym,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        alert("click")
        if(response.ok) {
            document.location.replace('/dashboard')
        } else {
            console.log(response.statusText);
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