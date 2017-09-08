function Reels(numberOfReels, rootStage, gameValueManager)
{
    this.allReels = [];
    
    for(var i =0; i<numberOfReels; i++)
    {
        this.allReels.push(new Reel(i+1, rootStage, gameValueManager));
    }

}