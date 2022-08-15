

// function to convert nav bar to mobile version.
function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// function to stop the page from re-submission every time it is refreshed.
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}


// function for tto open the contact page tabs
function openContact(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("contact-div");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-amber", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-amber";
}


// function for the tabs on the farm diary book keeping page and the contact page
function openGrowFood(evt, sectorName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("grow-sector");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("growlink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(sectorName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}



// function for the tabs on the farm diary book keeping page and the contact page
function openOtherSector(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("grow-sector");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}


// function to change the tabs for the analytics panel
function openAnalyticsSector(evt, sectorName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("analytics-sector");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("analyticsLink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("w3-border-red", "");
  }
  document.getElementById(sectorName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";

}


// opening page for the profile container main page
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "";
    tablinks[i].style.fontWeight = "400";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.color = color;
  elmnt.style.fontWeight = "700";
}

// code for the faq drop down text
function showFaqAns(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}


// tab functionality for the book keeping feature
function openDiary(evt, diaryName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("diary");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("diarylink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(diaryName).style.display = "block";
  evt.currentTarget.className += " w3-border-red";
}

function openPests(evt, diaryName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("pests");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("pestLink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-teal", "");
  }
  document.getElementById(diaryName).style.display = "block";
  evt.currentTarget.className += " w3-border-teal";
}

function openPrice(evt, diaryName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("pricing");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("pricelink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-amber", "");
  }
  document.getElementById(diaryName).style.display = "block";
  evt.currentTarget.className += " w3-border-amber";
}


// Callback that draws the pie chart for Sarah's pizza.
function drawSarahChart() {

  // Create the data table for Sarah's pizza.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Mushrooms', 1],
    ['Onions', 1],
    ['Olives', 2],
    ['Zucchini', 2],
    ['Pepperoni', 1]
  ]);

  // Set options for Sarah's pie chart.
  var options = {
    title: 'How Much Pizza Sarah Ate Last Night',
    width: 400,
    height: 300
  };

  // Instantiate and draw the chart for Sarah's pizza.
  var chart = new google.visualization.PieChart(document.getElementById('Sarah_chart_div'));
  chart.draw(data, options);
}


// function for opening the Faq and How to page tabs
function openFaqPage(evt, id) {
  var i, x, tablinks;
  x = document.getElementsByClassName("faq-div");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-teal", "");
  }
  document.getElementById(id).style.display = "block";
}


// function to show alert for payment
function payAlert() {
  alert("Wait 10 seconds for the pop up to show on phone..!");
  return true;
}


// function to open the tabs for the finance categories
function openFinance(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("finance");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("financeLink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}


// function to open the tabs for the records for finance
function openFinanceRecords(cityName) {
  var i, x, tablinks;
  var i;
  var x = document.getElementsByClassName("financeRecord");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}



// function to open the tabs for the records for finance
function openProd(cityName) {
  var i, x, tablinks;
  var i;
  var x = document.getElementsByClassName("prod");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}



function openBudget(cityName) {
  var i;
  var x = document.getElementsByClassName("budget");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}
