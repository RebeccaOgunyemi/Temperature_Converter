function temperatureConverter(valNum) {
    let fromValue =  document.querySelector('#from').value;
    let toValue =  document.querySelector('#to').value;

    let result;
    if (valNum != 0 && valNum != '') {
      if (fromValue == 1 && toValue == 2) {
        result = (valNum * 1.8) + 32;
      } else if (fromValue == 1 && toValue == 3) {
        result = valNum + 273.15;
      } else if (fromValue == 2 && toValue == 1) {
        result = (valNum - 32) / 1.8;
      } else if (fromValue == 2 && toValue == 3) {
        result = ((valNum - 32) / 1.8) + 273.15;
      } else if (fromValue == 3 && toValue == 1) {
        result = valNum - 273.15;
      } else if (fromValue == 3 && toValue == 2) {
        result = ((valNum - 273.15) * 1.8) + 32;
      } else {
        result = valNum;
      }
    }
    console.log(result)
    document.getElementById('outputCelsius').innerHTML = parseFloat(result);
    
  }
  function resetForm(){
    console.log('reset')   
    document.getElementById('outputCelsius').innerHTML = '';
    document.getElementById('myForm').reset()
  }
