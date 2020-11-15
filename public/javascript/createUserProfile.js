async function createProfileFormHandler(event) {
    event.preventDefault();

    const heightFeet = document.querySelector("#height-feet").value.trim();
    const heightInches = document.querySelector("#height-inches").value.trim();
    const height = heightFeet + "'" + heightInches + '"';
    const fitnessLevel = document.querySelector("input[name='level']:checked").value;
    const goals = Array
        .from(document.querySelectorAll('input[type="checkbox"]'))
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

    if (height && fitnessLevel && goals) {
        const response = await fetch('/api/profile/:id', {
            method: 'POST',
            body: JSON.stringify({
                height,
                fitnessLevel,
                goals
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            console.log(response.statusText);
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
