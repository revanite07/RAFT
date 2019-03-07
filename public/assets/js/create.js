$(document).ready(function () {
    $(".data-input").on("submit", function (event) {
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
            var userData = {};
            $.get("/api/userID").then(function (req) {
                userData.name = $('#nameInput').val().trim();
                userData.name = $('#countryInput').val().trim();
                userData.UserId = req[0].id;
                userData.climate = $("#q3").val();
                userData.bestSeason = $("#q4").val();
            }).then(function (req) {
                console.log(userData);
                $.post("/api/locations/new", userData).then(function (req) {
                    console.log("done");
                });
            });
        }
        else {
            alert("Please fill out all fields before submitting!");
        }
        return false;
        
    });

})