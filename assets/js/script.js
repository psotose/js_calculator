var amount = "";
var accumulated = 0;
var firstOperation = true;
var add = false;
var sustract = false;
var multiply = false;
var divide = false;

function display_numbers(number) {
  document.getElementById("display").value = amount + number;
  amount = document.getElementById("display").value;
}

function clear_values() {
  document.getElementById("display").value = 0;
  amount = 0;
  accumulated = 0;
  firstOperation = true;
}

function addition() {
  if (sustract) {
    accumulated = accumulated - parseInt(amount);
    document.getElementById("display").value = accumulated;
  } else if (multiply) {
    accumulated = accumulated * parseInt(amount);
    document.getElementById("display").value = accumulated;
  } else if (divide) {
    accumulated = accumulated / parseInt(amount);
    document.getElementById("display").value = accumulated;
  } else {
    accumulated = accumulated + parseInt(amount);
    document.getElementById("display").value = accumulated;
  }
  amount = "";
  sustract = false;
  multiply = false;
  divide = false;
  add = true;
  firstOperation = false;
}

function substraction() {
  if (firstOperation) {
    accumulated = parseInt(amount);
    firstOperation = false;
  } else {
    if (add) {
      accumulated = accumulated + parseInt(amount);
      document.getElementById("display").value = accumulated;
    } else if (multiply) {
      accumulated = accumulated * parseInt(amount);
      document.getElementById("display").value = accumulated;
    } else if (divide) {
      accumulated = accumulated / parseInt(amount);
      document.getElementById("display").value = accumulated;
    } else {
      accumulated = accumulated - parseInt(amount);
      document.getElementById("display").value = accumulated;
    }
  }
  amount = "";
  add = false;
  multiply = false;
  divide = false;
  sustract = true;
}

function multiplication() {
  if (firstOperation) {
    accumulated = parseInt(amount);
    document.getElementById("display").value = accumulated;
    firstOperation = false;
  } else {
    if (add) {
      accumulated = accumulated + parseInt(amount);
      document.getElementById("display").value = accumulated;
    } else if (sustract) {
      accumulated = accumulated - parseInt(amount);
      document.getElementById("display").value = accumulated;
    } else if (divide) {
      accumulated = accumulated / parseInt(amount);
      document.getElementById("display").value = accumulated;
    } else {
      accumulated = accumulated * parseInt(amount);
      document.getElementById("display").value = accumulated;
    }
  }
  amount = "";
  add = false;
  sustract = false;
  divide = false;
  multiply = true;
}

function division() {
  if (firstOperation) {
    accumulated = parseInt(amount);
    document.getElementById("display").value = accumulated;
    firstOperation = false;
  } else {
    if (add) {
      accumulated = accumulated + parseInt(amount);
      document.getElementById("display").value = accumulated;
    } else if (sustract) {
      accumulated = accumulated - parseInt(amount);
      document.getElementById("display").value = accumulated;
    } else if (multiply) {
      accumulated = accumulated * parseInt(amount);
      document.getElementById("display").value = accumulated;
    } else {
      accumulated = accumulated / parseInt(amount);
      document.getElementById("display").value = accumulated;
    }
  }
  amount = "";
  add = false;
  sustract = false;
  multiply = false;
  divide = true;
}

function result() {
  if (add) {
    document.getElementById("display").value = accumulated + parseInt(amount);
  } else if (sustract) {
    document.getElementById("display").value = accumulated - parseInt(amount);
  } else if (multiply) {
    document.getElementById("display").value = accumulated * parseInt(amount);
  } else if (divide) {
    document.getElementById("display").value = accumulated / parseInt(amount);
  }
  accumulated = parseInt(document.getElementById("display").value);
  amount = 0;
}