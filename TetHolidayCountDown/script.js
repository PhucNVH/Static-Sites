

// Get Vietnamese New Year from calendarific
var year = 2020;
//change your api key here
const apikey ="1adf4a3e7f5fe650030caf52535da3bd697c3150";
var requestQuery = "https://calendarific.com/api/v2/holidays?country=VN&year=" + year + "&api_key="+apikey;
//request to calendarific server
var queryResult = $.ajax({
    url: requestQuery,
    async: false,   
});

var Holidays = queryResult.responseJSON["response"]["holidays"];

//the JSON result we get is varied from year to year
//console.log(Holidays); //check it out
//So we need to find it 
function findNewYear(holidays) {
    for (var i = 0; i < holidays.length; i++)
        if (holidays[i]["name"] == ["Vietnamese New Year"]) {
            return holidays[i];
        }
}
var newyear = findNewYear(Holidays);
countDownDate = new Date(newyear["date"]["iso"]).getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("day").innerHTML = days + " Ngày";
    document.getElementById("hour").innerHTML = hours + " Giờ";
    document.getElementById("minute").innerHTML = minutes + " Phút";
    document.getElementById("second").innerHTML = seconds + " Giây";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = "Chúc";
        document.getElementById("hour").innerHTML = "Mừng";
        document.getElementById("minute").innerHTML = "Năm";
        document.getElementById("second").innerHTML = "Mới";
    }
}, 1000);
