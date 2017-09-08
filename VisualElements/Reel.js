var spinManager;
function Reel(rnum, rootStage, GameValueManager) {

    this.spinningManager = GameValueManager;
    spinManager = GameValueManager;


    
    this.reelNumber = rnum;
    this.numbers = new ReelLayouts().allLayouts[this.reelNumber - 1];
    this.symbolPaths = new SlotSymbolImageURLs();
    this.symbolContainer = new PIXI.Container();
    this.symbolTransform = new ReelSymbolTransform();
    this.current3VisibleSymbols = this.spinningManager.getCurrentVisibleSymbols(rnum-1);
    
    this.spinning = 0;
    this.currentSpinningGoalNum = 0;
    this.currentSpinningNum = 0;

    for(var i=0;i< this.numbers.length; i++)
    {
       var currentSymbolURL = this.symbolPaths.imageURLs[this.numbers[i]-1];
       var currentSymbol = new SimpleSymbol(currentSymbolURL,
                                            this.symbolTransform.reel1StartX + (this.reelNumber-1) * this.symbolTransform.symbolWidth,
                                            this.symbolTransform.reel1StartY + i * this.symbolTransform.symbolHeight,
                                            this.symbolTransform.symbolWidth,
                                            this.symbolTransform.symbolHeight,
                                            );
      if(this.current3VisibleSymbols.indexOf(i)>=0)
      {
          currentSymbol.visible = true;
        
      }
      else{
          currentSymbol.visible = false;
        
      }

       this.symbolContainer.addChild(currentSymbol);
    }

    rootStage.addChild(this.symbolContainer);

    requestAnimationFrame(this.update.bind(this));

}

Reel.prototype.getSpinning= function(){
    return this.spinning;
};

Reel.prototype.changeSpinningGoalNum = function(value){
    this.currentSpinningGoalNum = value;
};

Reel.prototype.changeSpinning = function(value){
    this.spinning = value;
};

Reel.prototype.update = function(){
    var reelCurrentVisibleSymbols = this.spinningManager.getCurrentVisibleSymbols(this.reelNumber-1);
    this.current3VisibleSymbols = reelCurrentVisibleSymbols;


    for(var a=0; a< this.symbolContainer.children.length; a++)
    {
      if(a == this.current3VisibleSymbols[0] || a == this.current3VisibleSymbols[1] || a == this.current3VisibleSymbols[2])
      {
        this.symbolContainer.children[a].visible = true;

      }
      else
      {
        this.symbolContainer.children[a].visible = false;           
      }        
    }

    this.symbolContainer.children[this.current3VisibleSymbols[0]].y = this.symbolTransform.reel1StartY ;
    this.symbolContainer.children[this.current3VisibleSymbols[1]].y = this.symbolTransform.reel1StartY + this.symbolContainer.children[0].height;
    this.symbolContainer.children[this.current3VisibleSymbols[2]].y = this.symbolTransform.reel1StartY + 2 * this.symbolContainer.children[0].height;    

    requestAnimationFrame(this.update.bind(this));

};
