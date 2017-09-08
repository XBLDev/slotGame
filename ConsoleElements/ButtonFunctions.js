var reelsLength;
var allReels;
var bet;
var balance;
var win;

var uiValueManager;


function ButtonFunctions(UIValueManager)//allreels, betText, balanceText, winText
{
  uiValueManager = UIValueManager;
  this.UIvaluemanager = UIValueManager;
}


ButtonFunctions.prototype.update = function(){

    console.log(this.reelsLength);
    requestAnimationFrame(this.update.bind(this));

};    

ButtonFunctions.prototype.increaseBet = function(){

    uiValueManager.setUIValue("betValue", 1);
    // console.log(uiValueManager.getUIValue("betValue"));

};

ButtonFunctions.prototype.decreaseBet = function(){
    if(uiValueManager.getUIValue("betValue") > 1)
    {
        uiValueManager.setUIValue("betValue", -1);
        // console.log(uiValueManager.getUIValue("betValue"));
    }
    else
    {
        console.log("MINIMUM BET IS $1.00");
    }    

};

ButtonFunctions.prototype.startSpinning = function(){
    // console.log(allReels.length + 5);

    var anyReelSpinning = uiValueManager.getIfAnyReelSpinning();
    if(anyReelSpinning == 1)
    {
        console.log("still spinning");
    }
    else
    {
        console.log("No reel spinning, can start new spinning, checking balance...");


        if(uiValueManager.getUIValue("balanceValue") - uiValueManager.getUIValue("betValue") < 0)
        {
            console.log("NOT ENOUGH BALANCE, DECREASE BET OR INCREASE BALANCE");
        }
        else
        {
            
            uiValueManager.setUIValue("balanceValue", -uiValueManager.getUIValue("betValue"));

            var reel1NewSpinGoal = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
            var reel2NewSpinGoal = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
            var reel3NewSpinGoal = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
            var reel4NewSpinGoal = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
            var reel5NewSpinGoal = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
            uiValueManager.setSpinningGoals(reel1NewSpinGoal, reel2NewSpinGoal, reel3NewSpinGoal, reel4NewSpinGoal, reel5NewSpinGoal);
            uiValueManager.setSpinning(1);
            uiValueManager.setCurrentSpinWinValue(-1);
            uiValueManager.setUIValue("winValue", -uiValueManager.getUIValue("winValue"));
            uiValueManager.setALLlinePatternVisible(false);
            uiValueManager.setDisplayWinLineTimer(-1);

        }
    }

};


