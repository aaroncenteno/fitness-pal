async function searchResultsHandler(event) {
    event.preventDefault();

    const gym_no_gym = document.querySelector('input[name="gym-no-gym-option"]:checked').value;
    const upper_lower = document.querySelector('input[name="body-option"]:checked').value;
    const fitness_level = document.querySelector('input[name="level-option"]:checked').value;


    // const gymNoGym = document.querySelector('input[name="gym-no-gym-option"]:checked').value;
    // const upperLower = document.querySelector('input[name="body-option"]:checked').value;
    // const fitnessLevel = document.querySelector('input[name="level-option"]:checked').value;

    // const searchStringArray = [];

    // if (gymNoGym) {
    //     let gymNoGymQuery = "gym_no_gym=";
    //     gymNoGymQuery = gymNoGymQuery.concat(gymNoGym);

    //     searchStringArray.push(gymNoGymQuery);
    // }

    // if (upperLower) {
    //     let upperLowerQuery = "upper_lower=";
    //     upperLowerQuery = upperLowerQuery.concat(upperLower);

    //     searchStringArray.push(upperLowerQuery);
    // }

    // if (fitnessLevel) {
    //     let fitnessLevelQuery = "fitness_level=";
    //     fitnessLevelQuery = fitnessLevelQuery.concat(fitnessLevel);

    //     searchStringArray.push(fitnessLevelQuery);
    // }

    // const queryString = searchStringArray.join("&");
    // const questionMark = "?";

    // let searchString = "";
    // searchString = searchString.concat(questionMark);
    // searchString = searchString.concat(queryString);

    // console.log(searchString);

    const response = await fetch('api/exercises/search/', {
        method: 'POST',
        body: JSON.stringify({
            // gymNoGym,
            // upperLower,
            // fitnessLevel
            gym_no_gym,
            upper_lower,
            fitness_level
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // if (response.ok) {
    //     document.location.replace('/exercise-search/results');
    // } else {
    //     alert(response.statusText);
    // }

    if (response.ok) {
        console.log('success');
    } else {
        alert(response.statusText);
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