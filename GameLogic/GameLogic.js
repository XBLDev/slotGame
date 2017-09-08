

var Gamevaluemanager;
var winPatterns = [];

function GameLogic(GameValueManager)
{
    Gamevaluemanager = GameValueManager;
    this.winValues = new winValues();
    this.paySummary = this.winValues.paySummary;
    this.symbolNames = new ReelLayouts().symbolNames;
    
    requestAnimationFrame(this.update.bind(this));


}

GameLogic.prototype.update = function()
{
    

    if(Gamevaluemanager.getIfAnyReelSpinning() == 0 && Gamevaluemanager.getCurrentSpinWinValue() == -1)
    {
        winPatterns = [];
        console.log("NO SPINNING && WIN VALUE NOT CALCULATED, SHOULD BE CALCULATING WIN VALUE");
        var allPatterns = Gamevaluemanager.getAllPatternValues();

        var winValueTotal = 0;
        for(var i=0; i<allPatterns.length; i++)
        {
            var currentPattern = allPatterns[i];
            var currentPatternWinSymbolNum = -1;
            var currentPatternWinValue = 0;
            var currentPatternWinNumOfSym = -1;
            for(var a = 0; a < currentPattern.length; a++)
            {
                if(a+2 < currentPattern.length && (currentPattern[a]==currentPattern[a+1] &&  currentPattern[a+1]==currentPattern[a+2]))
                {


                    if(currentPatternWinNumOfSym < 3)
                    {
                        currentPatternWinNumOfSym = 3;
                        currentPatternWinSymbolNum = currentPattern[a];                        
                    }
                }
                if(a+3 < currentPattern.length && (currentPattern[a]==currentPattern[a+1] && currentPattern[a+1]==currentPattern[a+2] && currentPattern[a+2]==currentPattern[a+3]))
                {

                    if(currentPatternWinNumOfSym < 4)
                    {
                        currentPatternWinNumOfSym = 4;
                        currentPatternWinSymbolNum = currentPattern[a];                        
                    }
                }
                if(a+4 < currentPattern.length && (currentPattern[a]==currentPattern[a+1] && currentPattern[a+1]==currentPattern[a+2] && currentPattern[a+2]==currentPattern[a+3] &&  currentPattern[a+3]==currentPattern[a+4]))
                {
                    if(currentPatternWinNumOfSym < 5)
                    {
                        currentPatternWinNumOfSym = 5;
                        currentPatternWinSymbolNum = currentPattern[a];                        
                    }
                }

            }
            if(currentPatternWinNumOfSym != -1)
            {
                console.log("WIN PATTERN: ",i+1,", WIN SYMBOL: ",this.symbolNames[currentPatternWinSymbolNum],", NUM OF WIN SYMBOL: ",currentPatternWinNumOfSym );                
                currentPatternWinValue = this.paySummary[currentPatternWinSymbolNum][currentPatternWinNumOfSym-3];
                winValueTotal = winValueTotal + currentPatternWinValue;
                winPatterns.push(i);                
            }


        }

        Gamevaluemanager.setCurrentSpinWinValue(winValueTotal);
        Gamevaluemanager.setUIValue("winValue", winValueTotal);
        Gamevaluemanager.setUIValue("balanceValue", winValueTotal);
        Gamevaluemanager.setDisplayWinLineTimer(0);
        
        console.log("Current Spin Win Value: "+ winValueTotal);

    }

    if(Gamevaluemanager.getDisplayWinLineTimer() == 0)
    {
        if(winPatterns.length!=0)
        {
            Gamevaluemanager.setlinePatternVisible(winPatterns[0]);
            winPatterns.shift();
        }
        else{
            Gamevaluemanager.setDisplayWinLineTimer(-1);

        }
    }
        

    requestAnimationFrame(this.update.bind(this));

};
