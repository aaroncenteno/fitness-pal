async function createProfileFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]
    const height_ft = document.querySelector("#height-feet").value.trim();
    const height_in = document.querySelector("#height-inches").value.trim();
    const weight = document.querySelector("#weight").value.trim();
    const fitness_level = document.querySelector("input[name='level']:checked").value;
    const goal_array = Array
        .from(document.querySelectorAll('input[type="checkbox"]'))
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
    const goal = goal_array.join(",");

    if (height_ft && height_in && weight && fitness_level && goal) {
        const response = await fetch(`/api/users/profile/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                height_ft,
                height_in,
                weight,
                fitness_level,
                goal
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const errorMessage = response.statusText;
        const errorMessageEl = document.querySelector(".error-message");
        errorMessageEl.innerHTML = 'Error Message: ' + errorMessage

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            console.log(response.statusText);
            $("#error-modal").modal('toggle');
        }
    }
}

jQuery(function ($) {
    var checkList = $('.dropdown-check-list');
    checkList.on('click', 'span.anchor', function(event){
        var element = $(this).parent();

        if ( element.hasClass('visible') )
        {
            element.removeClass('visible');
        }
        else
        {
            element.addClass('visible');
        }
    });
});

document.querySelector('.user-info-form').addEventListener('submit', createProfileFormHandler);