// Day, date and month in header
var dayYear = moment().format('dddd D MMMM');
$("#currentDay").text(dayYear);

$(document).ready(function () {

});

// Get current time hour value
var timeCurrent = moment().hour();

// Loop timeCurrent over each hourly block
$('.time-block').each(function() {
    var blockTime = parseInt($(this).attr("class").split("hour")[1]);
    // then compare current time to each block to add .past, .present and .future classes for the background colour
    if (timeCurrent === blockTime) {
        $(this).addClass("present");
    } else if (timeCurrent < blockTime) {
        $(this).addClass("future");
    } else {
        $(this).addClass("past");
    }
  });


// Save button event listener
$(".saveBtn").on("click", function() {

})

// Get nearby values of the task/descriptor
var time = $(this).parent().attr("id");
var text = $(this).children("description").val();

// Save the task/descriptor in local storage
localStorage.setItem(time, text);

// Get item/s from local storage if any


