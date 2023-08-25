$(".openNav").click(function () {

  $("#navbar").removeClass("d-none").hide().fadeIn(500);

  // $("#navbar").animate({ display: "block" }, 1000);

})

$(".nav-icon").click(function () {
  $("#navbar").addClass("d-none")
});


// $(".container .row .col-md-5 #Singerone").click(function(){

//  $("#inner1").slideToggle();


// });


$('#sliderDown .toggle').click(function () {
  $('.inner').not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});


//This part of the code waits for the window (web page) to be fully loaded before executing the specified function.



window.onload = function () {

  countDownToTime("25 october 2023 10:00:00");
}    //This part of the code waits for the window (web page) to be fully loaded before executing the specified function.

function countDownToTime(countTo) {

  let futureDate = new Date(countTo);
  futureDate = (futureDate.getTime() / 1000);
  //It converts the countTo string into a Date object using new Date(countTo). The date is then converted to Unix timestamp in seconds by dividing it by 1000.
  let now = new Date();
  now = (now.getTime() / 1000); //It gets the current date and time and converts it to a Unix timestamp in seconds.

  timeDifference = (futureDate - now);

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
  let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
  let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $('.seconds').html(`${secs} s`)


  setInterval(function () { countDownToTime(countTo); }, 1000);
  // This causes the countdown to update every 1 second.
}



let maxChar = 100;
$("#chars").html(maxChar);

$(".EnterMessage").keyup(function () {
  let currentChar = $(".EnterMessage").val().length;
  if (currentChar >= 101) {
    $("#chars").html("Your available character limit has been reached").css("color", "red");

  } else {
    let remainingChar = maxChar - currentChar;
    $("#chars").html(remainingChar);
  }
});


// $("a[href^='#']").click(function (e) {
//   let href = $(this).attr("href");
//   let section = $(href).offset().top;
//   $("body").animate({ scrollTop: section }, 3000);
// });
// to run this we must remove smooth-behaviour from bootstrap








