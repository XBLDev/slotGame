function testLogic(allreels)
{
    this.reels = allreels;
    this.reelsLength = reels.length;



}

testLogic.prototype.changeSpinning = function(value){


    
};

testLogic.prototype.startSpinning = function(){

    var anyReelSpinning = 0;
    for(var i=0; i< this.reels.children.length; i++)
    {
        if(this.reels.children[i].getSpinning() == 1)
        {
            anyReelSpinning = 1;
            break;
        }
    }

    if(anyReelSpinning == 1)
    {
        console.log("still spinning");
    }
    else
    {
        for(var i=0; i< this.reels.children.length; i++)
        {
            var spinGoal = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
            this.reels.children[i].changeSpinningGoalNum(spinGoal);
            this.reels.children[i].changeSpinning(1);

        }        
    }


};


