function compute()
{
    var principal = document.getElementById("principal").value; // get the value from principal

    var rate = document.getElementById("rate").value; // get the value from rate

    var years = document.getElementById("years").value;  //get the value from years


    var year = new Date().getFullYear()+parseInt(years) ;  // get the cuurent date

   
   
   var amount = principal * years * rate / 100;  // interest rate logc


    // output the result
   //document.getElementById("result").innerHTML=  "If you deposit " +  "<span class='highlight'>" +principal+  "</span>" + ",\<br\>at an interest rate of " +  "<span class='highlight'>"   +rate+  "%" + "</span>" +  "\<br\>You will receive an amount of " + "<span class='highlight'>"   +amount+  "</span>" +  ",\<br\>in the year "  + "<span class='highlight'>"  +year+ "</span>" +   "\<br\>";

   var result = document.getElementById('result');
  result.innerHTML = `If you deposit <span class='highlight'>  ${principal} </span> <br>
        at an interest rate of <span class='highlight'> ${rate}% </span> <br>
        You will receive an amount of <span class='highlight'> ${amount} </span> <br>
        in the year <span class='highlight'> ${year} </span><br>`;


    // input validation for principal
   if (principal <= 0) {
    alert('Please enter positve principal amount.');
    document.getElementById('principal').focus();
    return;
  }


    }


        

// display the updated numbers from the range slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}





