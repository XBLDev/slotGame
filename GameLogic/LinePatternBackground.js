
var visibilityManager;
function LinePatternBackground(rootStage, patternNumber, gameValueManager)
{   

    visibilityManager = gameValueManager;
    this.number = patternNumber;
    this.patterns = new LinePatterns();
    this.pattern = this.patterns.allLinePatterns[patternNumber];
    this.color = this.patterns.linePatternColors[patternNumber];
    this.patternwidth = this.patterns.linePatternSquareWidth;
    this.patternheight = this.patterns.linePatternSquareHeight;
    this.patternStartX = this.patterns.linePatternStartX;
    this.patternStartY = this.patterns.linePatternStartY;


    this.container = new PIXI.Container();
    
    for(var i=0; i<this.pattern.length;i++)
    {
        var rectangle = new PIXI.Graphics();
        rectangle.beginFill(this.color);
        rectangle.lineStyle(2, this.color, 1);
        rectangle.drawRect(this.patternStartX + i * this.patternwidth, this.patternStartY + (this.pattern[i]-1) * this.patternheight, this.patternwidth, this.patternheight);
        rectangle.endFill();
                          
        this.container.addChild(rectangle);
                                    
                                    
                                    
                                   
    }
    rootStage.addChild(this.container);

    requestAnimationFrame(this.update.bind(this));



}


LinePatternBackground.prototype.update = function(){

    for(var i=0; i< this.container.children.length; i++)
    {
        this.container.children[i].visible = visibilityManager.getlinePatternVisible(this.number);
    }
    requestAnimationFrame(this.update.bind(this));

}