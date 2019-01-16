// Business (or back-end) logic:

var add = function(number1, number2) {
  return (number1 + number2).toPrecision(4);
};

var subtract = function(number1, number2) {
  return (number1 - number2).toPrecision(4);
};

var multiply = function(number1, number2) {
  return (number1 * number2).toPrecision(4);
};

var divide = function(number1, number2) {
  return (number1 / number2).toPrecision(4);
};


//everything below this is user interface (front end) logic
$(document).ready(function() {
	$("form#add").submit(function(event) {
    event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var addresult = add(number1, number2);
		$("#addOutput").text(addresult);
	});
	$("form#subtract").submit(function(event) {
    event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var subtractResult = subtract(number1, number2);
		$("#subtractOutput").text(subtractResult);
	});
	$("form#multiply").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#multiply1").val());
		var number2 = parseInt($("#multiply2").val());
		var multiplyResult = multiply(number1, number2);
		$("#multiplyOutput").text(multiplyResult);
	});
	$("form#divide").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var divideResult = divide(number1, number2);
		$("#divideOutput").text(divideResult);
	});
});
