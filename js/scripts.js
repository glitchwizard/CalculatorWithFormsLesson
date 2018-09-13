//Business
var number1 = 0;
var number2 = 0;
var output = 0;

var add = function(number1,number2) {
    output = number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1*number2;
};

var divide = function(number1, number2) {
  return number1/number2;
};

//Business

//-------------

//Front-end

var num1 = 0;
var num2 = 0;
var op = 0;

$(function () {
  $('#7').on('click', function () {
    var text2 = $('#inputfield');
    if (text2.val() === "0") {
          text2.val("7");
    }
    else {
      text2.val(text2.val() + "7");
    }
  });

  $("#add").on('click', function () {
    num1 = parseInt($("#inputfield").val());
    var text3 = $('#inputfield');
    text3.val("0");
    op = 1;
  });
  $("#equals").on('click', function() {
    num2  = parseInt($("#inputfield").val());
    if (op === 1) {
      add(num1,num2);
    }
    else if (op === 2) {
      subtract(num1,num2);
    }
    else if (op === 3) {
      multiply(num1,num2);
    }
    else if (op === 4) {
      divide (num1,num2);
    }
  })
});
