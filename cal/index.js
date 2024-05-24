

$(document).ready(function(){
var arr = [];
var symbols = new RegExp('^[^0-9-]+.*');
var moreThanOneOperators = new RegExp('[^0-9]{2}$');

$('.button').on('click', function() {
arr.push($(this).attr('value'));
arr = arr.filter(function(n) { return n != ""; });
if(symbols.test(arr)) {
arr.splice(0, 1);
if(arr.length==0) {
('.result').text('0');
}
}

if(moreThanOneOperators.test(arr.join(''))){
arr.splice(-2, 1);
$('.result').text(arr.join(''));
}

if(arr.join('').match(/^0\d+/)){
arr.splice(-2, 1);
$('.result').text(arr.join(''));
} else if(arr.join('').match(/[^0-9\.]0\d+/)){
arr.splice(-2, 1);
$('.result').text(arr.join(''));
} else if(arr.join('').match(/\.0/)){
$('.result').text(arr.join(''));
}


$('.result').text(arr.join(''));

});
$('.button-decimal').click(function(){
var lastNum = arr.join('').match(/\.\d+$/);
if(/[^0-9]$/.test(arr)){
$('.result').text(arr.join(''));
} else if(arr.length==0) {
arr.splice(0, 0, "0.");
$('.result').text(arr.join(''));
}else {
arr.splice(arr.length, 0, ".");
$('.result').text(arr.join(''));
}

if(lastNum.join('').split('').includes('.')){
arr.splice(-1, 1);
$('.result').text(arr.join(''));
}
});

$('.button-negative').click(function(){
var lastNums = arr.join('').match(/\d+?\.?\d{1,}$/);
var minusLastNums = arr.join('').match(/-\d+?\.?\d{0,}$/);
if(!moreThanOneOperators.test(arr)){
if(minusLastNums){
arr.splice(-minusLastNums.join('').split('').length, 1);
$('.result').text(arr.join(''));
}
if(arr.length==0){
arr.splice(0, 0, "-0");
$('.result').text(arr.join(''));
}else if(lastNums){
arr.splice(-lastNums.join('').split('').length, 0, '-');
$('.result').text(arr.join(''));
}else if(lastNums==null){
arr.splice(-1, 0, "-");
$('.result').text(arr.join(''));
}
}
});

$('.button-ac').click(function(){
$('.result').text('0');
arr.splice(0, arr.length);

});

//delete the last value from array when C cal clicked
$('.button-c').click(function(){
if(arr.length==0){
$('.result').text("0");
}else{
arr.splice(-1, 1);
$('.result').text(arr.join(''));
}
});

// Calculate percentage
$('.button-per').click(function(){
var percentage = arr.join('');
$('.result').text(parseFloat(percentage)/100);
arr.splice(0, arr.length);
});

// output result
$('.button-result').click(function(){
var x = arr.join('');
var answer = eval(x);
if(answer.toString().length > 13) {
var ansArr = answer.toString().split('');
var restOfArr = ansArr.splice(10, 100, 'e');
ansArr.splice(ansArr.length, 0, restOfArr.length);
$('.result').text(ansArr.join(''));
} else {
$('.result').text(answer);
}
arr.splice(0, arr.length, answer);
});

});