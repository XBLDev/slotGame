function GameValueManager()
{
    this.reelLayouts = new ReelLayouts().allLayouts;
    this.symbolNames = new ReelLayouts().symbolNames;
    this.linepatterns  = new LinePatterns().allLinePatterns;

    this.reelSpinning = [0,0,0,0,0];
    this.reelsCurrentSpinningGoal = [0,0,0,0,0];
    this.reelsCurrentSpinningNum = [0,0,0,0,0];
    this.reelNumbers = 5;
    this.reelsCurrentVisibleSymbols = [[0,1,2],[0,1,2],[0,1,2],[0,1,2],[0,1,2]];
    // this.reelsCurrentVisibleSymbols = [[0,1,2],[1,2,3],[2,3,4],[0,1,2],[0,1,2]];

    this.linePatternBackgroundVisible = [false, false,false,false,false];
    // this.linePatternBackgroundVisible = [true, true,true,true,true];

    this.winValue = 0;    
    this.betValue = 1;    
    this.balanceValue = 10000;
    this.MeterValuesNames = ["winValue","betValue","balanceValue"];
    this.MeterValues = [this.winValue, this.betValue, this.balanceValue];
    this.currentSpinWinValue = 0;//0

    this.spinningFinished = 1;
    this.spinning = 0;

    this.displayingWinLineTimer = -1;
    this.displayNextWinLineTimer = 100;


    requestAnimationFrame(this.update.bind(this));


}


GameValueManager.prototype.getDisplayWinLineTimer = function()
{
    return this.displayingWinLineTimer;
};


GameValueManager.prototype.setDisplayWinLineTimer = function(value)
{
    this.displayingWinLineTimer = value;
};


GameValueManager.prototype.getlinePatternVisible = function(pos)
{
    return this.linePatternBackgroundVisible[pos];

};


GameValueManager.prototype.setALLlinePatternVisible = function(value)
{
    this.linePatternBackgroundVisible = [value, value,value,value,value];

};

GameValueManager.prototype.setlinePatternVisible = function(pos)
{
    for(var i=0;i<this.linePatternBackgroundVisible.length;i++)
    {
        if(i==pos)
        {
            this.linePatternBackgroundVisible[i] = true;
        }
        else
        {
            this.linePatternBackgroundVisible[i] = false;            
        }
    }

};

GameValueManager.prototype.setCurrentSpinWinValue = function(value)
{
    this.currentSpinWinValue = value;

};

GameValueManager.prototype.getCurrentSpinWinValue = function()
{
    return this.currentSpinWinValue;
};

GameValueManager.prototype.getReelNumbers = function()
{
    return this.reelNumbers;
};

GameValueManager.prototype.getCurrentVisibleSymbols = function(value)
{
    return this.reelsCurrentVisibleSymbols[value];
};

GameValueManager.prototype.getIfAnyReelSpinning = function()
{
    for(var i=0;i<this.reelSpinning.length;i++)
    {
        if(this.reelSpinning[i] == 1)
        {
            return 1;
        }
    }
    return 0;
};

GameValueManager.prototype.setSpinning = function(value)
{
    this.reelSpinning = [value,value,value,value,value];
};

GameValueManager.prototype.setSpinningGoals = function(spinningGoal1, spinningGoal2, spinningGoal3, spinningGoal4, spinningGoal5)
{
    this.reelsCurrentSpinningGoal = [spinningGoal1, spinningGoal2, spinningGoal3, spinningGoal4, spinningGoal5];
    this.reelsCurrentSpinningNum = [0,0,0,0,0];
};


GameValueManager.prototype.getAllPatternValues = function()
{
    var allPatternValues = [];
    for(var i=0; i< this.linepatterns.length; i++)
    {
        var pattern = this.linepatterns[i];
        var currentPatternValues = [];
        for(var a=0; a< pattern.length; a++)
        {
            var value = this.reelLayouts[a][this.reelsCurrentVisibleSymbols[a][pattern[a]-1]] -1;
            currentPatternValues.push(value);
            // console.log(pattern[a]);
        }
        allPatternValues.push(currentPatternValues);

    }
    return allPatternValues;
};









GameValueManager.prototype.setUIValue = function(Name, newValue)
{
    for(var i =0; i< this.MeterValuesNames.length;i++)
    {
        if(this.MeterValuesNames[i] == Name)
        {
            this.MeterValues[i] = this.MeterValues[i] + newValue;
            break;
        }
    }
};


GameValueManager.prototype.getUIValue = function(value)
{
    for(var i =0; i< this.MeterValuesNames.length;i++)
    {
        if(this.MeterValuesNames[i] == value)
        {
            return this.MeterValues[i];
        }
    }
};

GameValueManager.prototype.update = function(){
    // console.log(this.reelLayouts);
    for(var i= 0 ; i< this.reelSpinning.length; i++)
    {
        if(this.reelSpinning[i] == 1)
        {
    //  this.reelsCurrentVisibleSymbols = [[0,1,2],[0,1,2],[0,1,2],[0,1,2],[0,1,2]];
        //    this.reelsCurrentVisibleSymbols[i][0] = this.reelsCurrentVisibleSymbols[i][0] + 1;
        //    this.reelsCurrentVisibleSymbols[i][1] = this.reelsCurrentVisibleSymbols[i][1] + 1;
        //    this.reelsCurrentVisibleSymbols[i][2] = this.reelsCurrentVisibleSymbols[i][2] + 1;
            if(this.reelsCurrentSpinningNum[i] != this.reelsCurrentSpinningGoal[i])
            {
                if(this.reelsCurrentVisibleSymbols[i][0] == this.reelLayouts[i].length - 1)
                {
                    this.reelsCurrentVisibleSymbols[i][0] = 0;
                    this.reelsCurrentVisibleSymbols[i][1] = 1;
                    this.reelsCurrentVisibleSymbols[i][2] = 2;
                }
                else if(this.reelsCurrentVisibleSymbols[i][0] == this.reelLayouts[i].length - 2)
                {
                    this.reelsCurrentVisibleSymbols[i][0] = this.reelLayouts[i].length - 1;
                    this.reelsCurrentVisibleSymbols[i][1] = 0;
                    this.reelsCurrentVisibleSymbols[i][2] = 1;
                }
                else if(this.reelsCurrentVisibleSymbols[i][0] == this.reelLayouts[i].length - 3)
                {
                    this.reelsCurrentVisibleSymbols[i][0] = this.reelLayouts[i].length - 2;
                    this.reelsCurrentVisibleSymbols[i][1] = this.reelLayouts[i].length - 1;
                    this.reelsCurrentVisibleSymbols[i][2] = 0;
                }
                else
                {
                    this.reelsCurrentVisibleSymbols[i][0] = this.reelsCurrentVisibleSymbols[i][0] + 1;
                    this.reelsCurrentVisibleSymbols[i][1] = this.reelsCurrentVisibleSymbols[i][1] + 1;
                    this.reelsCurrentVisibleSymbols[i][2] = this.reelsCurrentVisibleSymbols[i][2] + 1;        
                }      

                // this.currentSpinningNum = this.currentSpinningNum + 1;
                this.reelsCurrentSpinningNum[i] = this.reelsCurrentSpinningNum[i] + 1;
            }
            else
            {
                this.reelSpinning[i] = 0;
            }
        }
    }

    if(this.displayingWinLineTimer != -1)
    {
        if(this.displayingWinLineTimer != this.displayNextWinLineTimer)
        {
            this.displayingWinLineTimer = this.displayingWinLineTimer + 1;
        }
        else
        {
            this.displayingWinLineTimer = 0;
        }
    }


    requestAnimationFrame(this.update.bind(this));

};








