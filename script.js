function convertFtoC(){
  const finput = document.querySelector("#ftc");
  const fresult = document.querySelector("#resultftc");

  const fvalue = parseFloat(finput.value);

  if(!isNaN(fvalue)){
    const cvalue = (fvalue - 32) * 5/9;
    fresult.textContent = `Celsius : ${cvalue.toFixed(2)}°C`;

    setTimeout(function() {
      fresult.textContent = '';
    }, 3000);

    }else{
      fresult.textContent = "*(Please enter any value)";
  }

}

function convertCtoF(){
  const cinput = document.querySelector("#ctf");
  const cresult = document.querySelector("#resultctf");

  const cvalue = parseFloat(cinput.value);

  if(!isNaN(cvalue)){
    const fvalue = (cvalue * 9/5) + 35;
    cresult.textContent = `Fahrenheit : ${fvalue.toFixed(2)}°F`;
    setTimeout(function() {
      cresult.textContent = '';
    }, 3000);

    }else{
      cresult.textContent = "*(Please enter any value)";
  }
}