function LinePatternAllBackGround(rootStage, numberOfbackgrounds, gameValueManager)
{
    this.allbgs = [];
    
    for(var i =0; i<numberOfbackgrounds; i++)
    {
        this.allbgs.push(new LinePatternBackground( rootStage, i, gameValueManager));
        // rootStage.addChild(allReels[i]);
    }
}