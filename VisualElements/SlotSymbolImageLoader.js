function SlotSymbolImageLoader(){

    PIXI.loader.add("images/cat.png").add("images/up.png").
    add("images/down.png").add("images/snowflake.png").
    add("images/sandglass.png").add("images/sun.png").
    add("images/victory.png").
    add("images/Ace.png").
    add("images/King.png").
    add("images/Queen.png").
    add("images/Jack.png").load(function(){
        console.log("ALL IMAGES LOADED");
    });


}

