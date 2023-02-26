var JohnAvaliableTime = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30"];
var JennyAvaliableTime = ["13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30","17:00", "17:30", "18:00", "18:30"];
var MikeAvaliableTime = ["19:00", "19:30", "20:00", "20:30","21:00", "21:30"]; 
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

var wantedEmployee = "John";

openInfo(event,'services');
function openInfo(evt, tabName) {

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    if (evt.currentTarget.className != 'NaN' && evt.currentTarget.className != null)
    {
        evt.currentTarget.className += " active";
    }

function checkDate() {
    picker = document.getElementById('date1');
    var day = new Date(picker.value).getUTCDay();
    if ([6, 0].includes(day)) {
        picker.value = '';
        alert('This employee is not avaliable during weekends');
    }
}
}


function checkIt(){
    var form = document.getElementById("myForm");
    //alert(checkForm(form));
    if(checkForm(form)){
        alert("submission successful!");
        openInfo(event, 'services');
    }
}

//check if the form is filled
function checkForm(form) {
    // get all the inputs within the submitted form
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if (inputs[i].hasAttribute("required")) {
            if (inputs[i].value == "") {
                // found an empty field that is required
                alert("Please fill all required fields");
                return false;
            }
        }
    }
    return true;
}

function updateEmployee(){
    //alert(document.getElementById("selectEmployee").value);
    //get selected employee
    var input = document.getElementById("selectEmployee").value;

    //add his time slots into the time input section
    var time = document.getElementById("selectTime");
    time.innerHTML="";
    if (input =="John"){
        for (var i = 0; i < JohnAvaliableTime.length; i++) {
            var opt = JohnAvaliableTime[i];
            time.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
        }
    }
    else if(input=="Mike"){
        for (var i = 0; i < MikeAvaliableTime.length; i++) {
            var opt = MikeAvaliableTime[i];
            time.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
        }
    }
    else{
        for (var i = 0; i < JennyAvaliableTime.length; i++) {
            var opt = JennyAvaliableTime[i];
            time.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
        }
    }
}


function checkDate() {
    picker = document.getElementById('date1');
    var day = new Date(picker.value).getUTCDay();
    if ([6, 0].includes(day)) {
        picker.value = '';
        alert('This employee is not avaliable during weekends');
    }
}

$(document).ready(function(){
    $("#cardName").mouseenter(function(){
        $("#textforcardName").addClass("hideInput");
    });

    $("#cardName").mouseleave(function(){
        $("#textforcardName").removeClass("hideInput");
    });

    $("#cardName").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });
});