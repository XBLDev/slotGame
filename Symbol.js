function Symbol(texture) {
  this.texture = texture;
  PIXI.Sprite.call(this, texture);
}
Symbol.prototype.constructor = Symbol;

Symbol.prototype = Object.create(PIXI.Sprite.prototype);


// import { Sprite } from 'pixi.min.js';

// export class Symbol extends Sprite {

//     constructor(){
//         super();
//     }




// }
