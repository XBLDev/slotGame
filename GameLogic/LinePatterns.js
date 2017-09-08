function LinePatterns()
{
    this.linePattern1 = [2,2,2,2,2];
    this.linePattern2 = [1,1,1,1,1];
    this.linePattern3 = [3,3,3,3,3];
    this.linePattern4 = [1,2,3,2,1];
    this.linePattern5 = [3,2,1,2,3];

    this.linePatternStartX = window.innerWidth/3;//window.innerWidth, window.innerHeight
    this.linePatternStartY = window.innerHeight/3;
    this.linePatternSquareWidth = window.innerWidth/(3*5);//100
    this.linePatternSquareHeight = window.innerHeight/(3*5);//100


    this.allLinePatterns = [this.linePattern1, this.linePattern2, this.linePattern3, this.linePattern4, this.linePattern5];
    this.linePatternColors = [0xffff00, 0xff0000, 0x00ff00, 0xff4500, 0x006400];

}