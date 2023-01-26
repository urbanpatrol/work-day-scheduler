// Day, date and month in header
var dayYear = moment().format('dddd D MMMM');
$("#currentDay").text(dayYear);

function trackTime() {
// Get current time hour value
var timeCurrent = moment().hour();

// Loop time over each hourly block
$(".time-block").each(function() {
    var blockTime = parseInt($(this).attr("class").split("hour")[1]);
    // then compare current time to each block to add .past, .present and .future classes for the background colour
    if (blockTime < timeCurrent) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockTime === timeCurrent) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
  })
}

$(document).ready(function () {
// Save button event listener
$(".saveBtn").on("click", function() {

// Get nearby values of the task/descriptor
// looks at the parent id and siblings(new) associated with the class "description"
var time = $(this).parent().attr("id");
var text = $(this).siblings(".description").val();

// Save the task/descriptor in local storage
localStorage.setItem(time, text);
})


// Get item/s from local storage if any
$("#09-block .description").val(localStorage.getItem("09-block"));
$("#10-block .description").val(localStorage.getItem("10-block"));
$("#11-block .description").val(localStorage.getItem("11-block"));
$("#12-block .description").val(localStorage.getItem("12-block"));
$("#13-block .description").val(localStorage.getItem("13-block"));
$("#14-block .description").val(localStorage.getItem("14-block"));
$("#15-block .description").val(localStorage.getItem("15-block"));
$("#16-block .description").val(localStorage.getItem("16-block"));
$("#17-block .description").val(localStorage.getItem("17-block"));
//console.log("09-block");

trackTime();
})
