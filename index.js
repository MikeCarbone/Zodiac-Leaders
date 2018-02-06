var shade = document.getElementById('shade');





//Attaching a click event to each leader
var leader = document.getElementsByClassName('leader');
for (var i = 0; i < leader.length; i++){
    leader[i].addEventListener("click", function(){showLeaderCard(this)}, false);
}




//This will display the leaders card
var openLeaderCard = ''
function showLeaderCard(element){
   var leaderCard = element.id + "Card";
   openLeaderCard = leaderCard;

   document.getElementById(leaderCard).style.display = "block";
   shade.style.display = "block";

}




shade.addEventListener("click", function(){hideLeaderCard()});

//This will hide the card and make the shade go away
function hideLeaderCard(){
    document.getElementById(openLeaderCard).style.display = "none";
    shade.style.display = "none";
}


//This will work the input section
document.getElementById('submitButton').addEventListener("click", function(){inputFactory()});
var zodiacSign = ''
function inputFactory(){
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;

    if (month > 0 && month < 13 && day > 0){
        switch(month){
            default:
                zodiacSign = 'noMatch';
            case '1':
                if (day < 18){
                    zodiacSign = 'capricorn';
                }
                else if (day > 31){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'aquarius';
                }
                break;
            case '2':
                if (day < 21){
                    zodiacSign = 'aquarius';
                }
                else if (day > 29){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'pisces';
                }
                break;
            case '3':
                if (day < 21){
                    zodiacSign = 'pisces';
                }
                else if (day > 31){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'aries';
                }
                break;
            case '4':
                if (day < 20){
                    zodiacSign = 'aries';
                }
                else if (day > 30){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'taurus';
                }
                break;
            case '5':
                if (day < 21){
                    zodiacSign = 'taurus';
                }
                else if (day > 31){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'gemini';
                }
                break;
            case '6':
                if (day < 22){
                    zodiacSign = 'gemini';
                }
                else if (day > 30){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'cancer';
                }
                break;
            case '7':
                if (day < 24){
                    zodiacSign = 'cancer';
                }
                else if (day > 31){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'leo';
                }
                break;
            case '8':
                if (day < 24){
                    zodiacSign = 'leo';
                }
                else if (day > 31){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'virgo';
                }
                break;
            case '9':
                if (day < 24){
                    zodiacSign = 'virgo';
                }
                else if (day > 30){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'libra';
                }
                break;
            case '10':
                if (day < 24){
                    zodiacSign = 'libra';
                }
                else if (day > 31){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'scorpio';
                }
                break;
            case '11':
                if (day < 21){
                    zodiacSign = 'scorpio';
                }
                else if (day > 30){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'sagittarius';
                }
                break;
            case '12':
                if (day < 22){
                    zodiacSign = 'sagittarius';
                }
                else if (day > 31){
                    zodiacSign = 'noMatch';
                }
                else{
                    zodiacSign = 'capricorn';
                }
                break;
        }
    }
    else{
        zodiacSign = 'noMatch';
    }

    var leaderCard = zodiacSign + "Card";
    openLeaderCard = leaderCard;

    document.getElementById(leaderCard).style.display = "block";
    shade.style.display = "block";

    month = '';
    day = '';
}