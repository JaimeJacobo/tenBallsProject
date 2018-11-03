
let probK, probB, probR, probKK, probKB, probKR, probBB, probBR,    probRR, probKKK, probKKB, probKKR, probKBB, probKBR,            probKRR, probBBB, probBBR, probBRR, probRRR;



$('.blackButton').click(function(){

    let numberOfBlackBalls = $('#textBlackButton').val();
    $("#textBlackButton").remove();
    $(".blackButton").text(numberOfBlackBalls);
});

$('.blueButton').click(function(){

    let numberOfBlueBalls = $('#textBlueButton').val();
    $("#textBlueButton").remove();
    $(".blueButton").text(numberOfBlueBalls);
});

$('.redButton').click(function(){
    let numberOfRedBalls = $('#textRedButton').val();
    $("#textRedButton").remove();
    $(".redButton").text(numberOfRedBalls);
});

$("#divBotonCalcular").click(function(){

    let numberOfBlackBalls = $('.blackButton').text();
    let numberOfBlueBalls = $('.blueButton').text();
    let numberOfRedBalls = $('.redButton').text();

        // With this below, I'm just trying out if the thing is working. Right now it multiplies the 3 numbers. I have to change it, but it is working, yei!
        // $("#pResultados").text(arrayOfTheBalls[0] * arrayOfTheBalls[1] * arrayOfTheBalls[2]);

    if(numberOfBlackBalls == 1 && numberOfBlueBalls == 0 && numberOfRedBalls == 0){
        $("#pResultados").text('The probability of taking one BLACK ball from the bag is ' + calculateProbK() + '%.');

    } else if(numberOfBlackBalls == 0 && numberOfBlueBalls == 1 && numberOfRedBalls == 0){
        $("#pResultados").text('The probability of taking one BLUE ball from the bag is ' + calculateProbB() + '%.');
    
    } else if(numberOfBlackBalls == 0 && numberOfBlueBalls == 0 && numberOfRedBalls == 1){
    $("#pResultados").text('The probability of taking one RED ball from the bag is ' + calculateProbR() + '%.');

    } else if(numberOfBlackBalls == 2 && numberOfBlueBalls == 0 && numberOfRedBalls == 0){
    $("#pResultados").text('The probability of taking one BLACK ball from the bag, putting it in again, and taking another BLACK ball is ' + calculateProbKK() + '%.');

    } else if(numberOfBlackBalls == 1 && numberOfBlueBalls == 1 && numberOfRedBalls == 0){
    $("#pResultados").text('The probability of taking one BLACK ball from the bag, putting it in again, and taking a BLUE ball is ' + calculateProbKB() + '%.');

    } else if(numberOfBlackBalls == 1 && numberOfBlueBalls == 0 && numberOfRedBalls == 1){
    $("#pResultados").text('The probability of taking one BLACK ball from the bag, putting it in again, and taking a RED ball is ' + calculateProbKR() + '%.');

    } else if(numberOfBlackBalls == 0 && numberOfBlueBalls == 2 && numberOfRedBalls == 0){
    $("#pResultados").text('The probability of taking one BLUE ball from the bag, putting it in again, and taking another BLUE ball is ' + calculateProbBB() + '%.');

    } else if(numberOfBlackBalls == 0 && numberOfBlueBalls == 1 && numberOfRedBalls == 1){
    $("#pResultados").text('The probability of taking one BLUE ball from the bag, putting it in again, and taking a RED ball is ' + calculateProbBR() + '%.');

    } else if(numberOfBlackBalls == 0 && numberOfBlueBalls == 0 && numberOfRedBalls == 2){
    $("#pResultados").text('The probability of taking one RED ball from the bag, putting it in again, and taking a RED ball is ' + calculateProbRR() + '%.');

    } else if(numberOfBlackBalls == 3 && numberOfBlueBalls == 0 && numberOfRedBalls == 0){
    $("#pResultados").text('The probability of taking one BLACK ball from the bag, putting it in again, taking another BLACK ball, putting it in again, and getting another BLACK ball is ' + calculateProbKKK() + '%.');
    
    } else if(numberOfBlackBalls == 2 && numberOfBlueBalls == 1 && numberOfRedBalls == 0){
    $("#pResultados").text('The probability of taking one BLACK ball from the bag, putting it in again, taking another BLACK ball, putting it in again, and getting a BLUE ball is ' + calculateProbKKB() + '%.');

    } else if(numberOfBlackBalls == 2 && numberOfBlueBalls == 0 && numberOfRedBalls == 1){
    $("#pResultados").text('The probability of taking one BLACK ball from the bag, putting it in again, taking another BLACK ball, putting it in again, and getting a RED ball is ' + calculateProbKKR() + '%.');

    } else if(numberOfBlackBalls == 1 && numberOfBlueBalls == 2 && numberOfRedBalls == 0){
    $("#pResultados").text('The probability of taking one BLACK ball from the bag, putting it in again, taking a BLUE ball, putting it in again, and getting another BLUE ball is ' + calculateProbKBB() + '%.');

    } else if(numberOfBlackBalls == 1 && numberOfBlueBalls == 1 && numberOfRedBalls == 1){
    $("#pResultados").text('The probability of taking one BLACK ball from the bag, putting it in again, taking a BLUE ball, putting it in again, and getting a RED ball is ' + calculateProbKBR() + '%.');

    } else if(numberOfBlackBalls == 1 && numberOfBlueBalls == 0 && numberOfRedBalls == 2){
    $("#pResultados").text('The probability of taking one BLACK ball from the bag, putting it in again, taking a RED ball, putting it in again, and taking another RED ball is ' + calculateProbKRR() + '%.');
    };

    


});




calculateProbK = function(){
    let probK = 5/10 * 100;
    return probK;
};

calculateProbB = function() {
    let probB = 2/10 * 100;
    return probB;
};

calculateProbR = function(){
    probR = 3/10 * 100;
    return probR;
};

calculateProbKK = function(){
    probKK = calculateProbK() * calculateProbK();
    return probKK / 100;
};

calculateProbKB = function(){
    probKB = calculateProbK() * calculateProbB();
    return probKB / 100;
};

calculateProbKR = function(){
    probKR = calculateProbK() * calculateProbR();
    return probKR / 100;
};

calculateProbBB = function() {
    probBB = calculateProbB() * calculateProbB();
    return probBB / 100;
};

calculateProbBR = function() {
    probBR = calculateProbB() * calculateProbR();
    return probBR / 100;
};

calculateProbRR = function() {
    probRR = Math.pow(calculateProbR(), 2);
    return probRR / 100;
};

calculateProbKKK = function() {
    probKKK = Math.pow(calculateProbK(), 3);
    return probKKK / 10000;
};

calculateProbKKB = function() {
    probKKB = Math.pow(calculateProbK(), 2) * calculateProbB();
    return probKKB / 10000;
};

calculateProbKKR = function() {
    probKKR = Math.pow(calculateProbK(), 2) * calculateProbR();
    return probKKR / 10000;
};

calculateProbKBB = function(){
    probKBB = calculateProbK() * Math.pow(calculateProbB(), 2);
    return probKBB / 10000;
};

calculateProbKBR = function(){
    probKBR = calculateProbK() * calculateProbB() * calculateProbR();
    return probKBR / 10000;
};

calculateProbKRR = function(){
    probKRR = calculateProbK() * Math.pow(calculateProbR(), 2);
    return probKRR / 10000;
};

calculate_BBB = function() {

};

calculate_BBR = function() {

};

calculate_BRR = function() {

};

calculate_RRR = function() {

};
