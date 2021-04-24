import Camera from "./Camera";
import Sceene from "./Sceene";

/** Each Game can draw and execute a game using the {@link start} function */
class Game {
    /** 
     * Creates a game 
     * @param {Object|String} canvas A HTML canvas or it's id
     * @param {Sceene} [sceene] The loaded sceene
     * @param {Camera} [camera] The loaded cameraç
     * todo Change sceene and camera to a reference systeme
    */
    constructor(canvas,sceene,camera){
        this.canvas = canvas.width?canvas:(document.getElementById("canvas")||document.querySelector("canvas"))
        this.ctx = this.canvas.getContext("2d")
        this.sceene = sceene || new Sceene()
        this.camera = camera || new Camera(0,0)

        /**
         * The x cord of the client's mouse
         * @type {Number}
        */
        this.clientX = 0
        /**
         * The y cord of the client's mouse
         * @type {Number}
        */
        this.clientY = 0
    }
}
class DefaultGame extends Game{
    constructor(){
        super("canvas")
    }
}

export {Game,DefaultGame}