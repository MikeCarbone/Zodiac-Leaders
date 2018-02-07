(function (){

    

    //This will build the HTML blocks
    var zodiacSigns = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
    var zodiacSignsLength = zodiacSigns.length;

    function buildBlocks(){
        var leadersContainer = document.getElementById('leadersContainer');
        
        for (i = 0; i < zodiacSignsLength; i++){
            var newLeader = document.createElement('div');
            leadersContainer.appendChild(newLeader);
            newLeader.classList.add('leader');
            newLeader.id = zodiacSigns[i];
            var leaderHeader = document.createElement('h1');
            newLeader.appendChild(leaderHeader);
            leaderHeader.innerHTML = zodiacSigns[i].charAt(0).toUpperCase() + zodiacSigns[i].slice(1);
         
        }
    }

    buildBlocks();





    var shade = document.getElementById('shade');

    //Attaching a click event to each leader
    var leader = document.getElementsByClassName('leader');
    for (var i = 0; i < leader.length; i++){
        leader[i].addEventListener("click", function(){showLeaderCard(this.id)}, false);
    }

    //This will display the leaders card
    var openLeaderCard = ''
    function showLeaderCard(zodiacId){
       var leaderCard = zodiacId + "Card";
       openLeaderCard = leaderCard;

       document.getElementById(leaderCard).style.display = "block";
       shade.style.display = "block";

       document.getElementById(zodiacId + 'Sound').play();

    }

    //This will hide the card, make the shade go away and stop/reload audio
    shade.addEventListener("click", function(){hideLeaderCard()});
    function hideLeaderCard(){
        document.getElementById(openLeaderCard).style.display = "none";
        shade.style.display = "none";

        document.getElementById(openLeaderCard.slice(0, -4) + 'Sound').pause();
        document.getElementById(openLeaderCard.slice(0, -4) + 'Sound').load();
    }

    //This will work the input section and figure out which card to show
    document.getElementById('submitButton').addEventListener("click", function(){inputFactory()});
    var zodiacSign = ''
    function inputFactory(){
        var month = parseInt(document.getElementById('month').value);
        var day = parseInt(document.getElementById('day').value);

        if (month > 0 && month < 13 && day > 0){
            switch(month){
                default:
                    zodiacSign = 'noMatch';
                case 1:
                    if (day < 18){
                        zodiacSign = 'capricorn';
                    } else if (day > 31){
                        zodiacSign = 'noMatch';
                    } else {
                        zodiacSign = 'aquarius';
                    } break;
                case 2:
                    if (day < 21){
                        zodiacSign = 'aquarius';
                    } else if (day > 29){
                        zodiacSign = 'noMatch';
                    } else{
                        zodiacSign = 'pisces';
                    } break;
                case 3:
                    if (day < 21){
                        zodiacSign = 'pisces';
                    } else if (day > 31){
                        zodiacSign = 'noMatch';
                    } else{
                        zodiacSign = 'aries';
                    } break;
                case 4:
                    if (day < 20){
                        zodiacSign = 'aries';
                    } else if (day > 30){
                        zodiacSign = 'noMatch';
                    }  else{
                        zodiacSign = 'taurus';
                    } break;
                case 5:
                    if (day < 21){
                        zodiacSign = 'taurus';
                    } else if (day > 31){
                        zodiacSign = 'noMatch';
                    } else{
                        zodiacSign = 'gemini';
                    } break;
                case 6:
                    if (day < 22){
                        zodiacSign = 'gemini';
                    } else if (day > 30){
                        zodiacSign = 'noMatch';
                    } else{
                        zodiacSign = 'cancer';
                    } break;
                case 7:
                    if (day < 24){
                        zodiacSign = 'cancer';
                    } else if (day > 31){
                        zodiacSign = 'noMatch';
                    } else{
                        zodiacSign = 'leo';
                    } break;
                case 8:
                    if (day < 24){
                        zodiacSign = 'leo';
                    } else if (day > 31){
                        zodiacSign = 'noMatch';
                    } else{
                        zodiacSign = 'virgo';
                    } break;
                case 9:
                    if (day < 24){
                        zodiacSign = 'virgo';
                    } else if (day > 30){
                        zodiacSign = 'noMatch';
                    } else{
                        zodiacSign = 'libra';
                    } break;
                case 10:
                    if (day < 24){
                        zodiacSign = 'libra';
                    } else if (day > 31){
                        zodiacSign = 'noMatch';
                    } else{
                        zodiacSign = 'scorpio';
                    } break;
                case 11:
                    if (day < 21){
                        zodiacSign = 'scorpio';
                    } else if (day > 30){
                        zodiacSign = 'noMatch';
                    } else{
                        zodiacSign = 'sagittarius';
                    } break;
                case 12:
                    if (day < 22){
                        zodiacSign = 'sagittarius';
                    } else if (day > 31){
                        zodiacSign = 'noMatch';
                    } else{
                        zodiacSign = 'capricorn';
                    } break;
            }
        }
        else{
            zodiacSign = 'noMatch';
        }

        showLeaderCard(zodiacSign);
        month = '';
        day = '';
    }

})();