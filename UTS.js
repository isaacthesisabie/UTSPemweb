function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
  
    if (isNaN(inputValue)) {
      alert("Please enter a valid number");
      return;
    }
  
    // Konversi nilai input ke meter
    let valueInMeters;
    switch (inputUnit) {
      case "meter":
        valueInMeters = inputValue;
        break;
      case "kilometer":
        valueInMeters = inputValue * 1000;
        break;
      case "centimeter":
        valueInMeters = inputValue / 100;
        break;
      case "mile":
        valueInMeters = inputValue * 1609.34;
        break;
    }
  
    // Konversi dari meter ke satuan yang diinginkan
    let convertedValue;
    switch (outputUnit) {
      case "meter":
        convertedValue = valueInMeters;
        break;
      case "kilometer":
        convertedValue = valueInMeters / 1000;
        break;
      case "centimeter":
        convertedValue = valueInMeters * 100;
        break;
      case "mile":
        convertedValue = valueInMeters / 1609.34;
        break;
    }
  
    document.getElementById("result").innerText = convertedValue.toFixed(2);
  }
  