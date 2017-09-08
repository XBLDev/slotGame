function Start()
{
    //Aliases
    var Container = PIXI.Container,
        autoDetectRenderer = PIXI.autoDetectRenderer,
        loader = PIXI.loader,
        TextureCache = PIXI.utils.TextureCache,
        Rectangle = PIXI.Rectangle,
        resources = PIXI.loader.resources,
        Sprite = PIXI.Sprite;

    //Create the renderer
    this.renderer = autoDetectRenderer(window.innerWidth, window.innerHeight);//256,256
    this.renderer.view.style.border = "5px white";
    this.renderer.backgroundColor = 0xffffff;
    this.renderer.view.style.position = "absolute";
    this.renderer.autoResize = true;
    this.renderer.resize(window.innerWidth, window.innerHeight);
    //Add the canvas to the HTML document
    document.body.appendChild(this.renderer.view);

    this.rootStage = new Container();

    this.gameValueManager = new GameValueManager();
    this.gameLogic = new GameLogic(this.gameValueManager);


    this.linePatternBackgrounds = new LinePatternAllBackGround(this.rootStage, 5, this.gameValueManager);

    this.allreels = new Reels(5, this.rootStage, this.gameValueManager); 
    this.buttontrans = new ButtonTransforms();
    this.metertrans  = new MeterTransform();


    this.winMeter   = new Meter(this.rootStage, this.metertrans.winTopX, this.metertrans.winTopY, this.metertrans.winTopWidth, this.metertrans.winTopHeight,
                                this.metertrans.winBottomX, this.metertrans.winBottomY, this.metertrans.winBottomWidth, this.metertrans.winBottomHeight, 
                                100,"winValue","WIN", this.gameValueManager);

    this.betMeter   = new Meter(this.rootStage, 
                                this.metertrans.betTopX, this.metertrans.betTopY, this.metertrans.betTopWidth, this.metertrans.betTopHeight,
                                this.metertrans.betBottomX, this.metertrans.betBottomY, this.metertrans.betBottomWidth, this.metertrans.betBottomHeight, 
                                1,"betValue","BET", this.gameValueManager);
    
    this.balanceMeter   = new Meter(this.rootStage, 
                                this.metertrans.balanceTopX, this.metertrans.balanceTopY, this.metertrans.balanceTopWidth, this.metertrans.balanceTopHeight,
                                this.metertrans.balanceBottomX, this.metertrans.balanceBottomY, this.metertrans.balanceBottomWidth, this.metertrans.balanceBottomHeight, 
                                10000,"balanceValue","BALANCE", this.gameValueManager);

    // this.buttonfuncs = new ButtonFunctions(this.allreels, this.betMeter, this.balanceMeter, this.winMeter);
    this.buttonfuncs = new ButtonFunctions(this.gameValueManager);





    this.spinbutton = new Button(this.rootStage, this.buttontrans.SpinBtnX, this.buttontrans.SpinBtnY, this.buttontrans.SpinBtnWidth, this.buttontrans.SpinBtnHeight, 
                        "SPIN","", this.buttonfuncs.startSpinning);

    this.upbutton = new Button(this.rootStage, this.buttontrans.upBtnX, this.buttontrans.upBtnY, this.buttontrans.upBtnwidth, this.buttontrans.upBtnheight, 
                        "","images/up.png", this.buttonfuncs.increaseBet);

    this.downbutton = new Button(this.rootStage, this.buttontrans.downBtnX, this.buttontrans.downBtnY, this.buttontrans.downBtnwidth, this.buttontrans.downBtnheight, 
                        "","images/down.png", this.buttonfuncs.decreaseBet);                        


    this.renderer.render(this.rootStage);

    requestAnimationFrame(this.update.bind(this));

}



Start.prototype.update = function(){


    this.renderer.render(this.rootStage);
    requestAnimationFrame(this.update.bind(this));

};


