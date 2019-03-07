$(document).ready(function () {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $(".form-control").on("submit", function (event) {
        event.preventDefault();

        function validateForm() {
            var isValid = true;

            $('.chosen-select').each(function () {
                if ($(this).val() === "")
                    isValid = false
            })
            return isValid;
        }
        if (validateForm() == true) {

            var surveyData = {
                country: '',
                climate: $("#q1").val(),
                bestSeason: $("#q2").val()
            };

            $.post("/api/locations", surveyData).then(function (data) {
                $.post("/api/locations/newSurvey", data);
                $("#matchName").text("Your next destination is " + data.name + ", " + data.country + "!");
                $("#matchClimate").text(data.country + " has a " + data.climate + " climate" + ".");
                $("#matchBestSeason").text("The best time to go to " + data.name + " is in the " + data.bestSeason + ".");
                $("#matchImg").attr("src", data.image);
                modal.style.display = "block";
            })

        }
        else {
            alert("Please fill out all fields before submitting!");
        }
        return false;
    });
})
