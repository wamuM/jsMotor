import {DefaultGame, Game} from "./objects/Game"
import draw from "./tickPhases/draw"


/**
 * The start function
 * @param {setupFunction} setup This function executes after runing the start function and should return a {@link Game}
 * @param {updateFunction} update This function executes each tick 
 */
function start(setup,update){   
    let game = setup() || new DefaultGame();

    document.addEventListener("mousemove",(e)=>{
        game.clientX = e.clientX
        game.clientY = e.clientY
    });

    async function tick(animationTime){
        //calculating delta time
        let dt = 0;

        draw(game)
        update(game,dt)
        game.sceene.executeLoadedScripts(game,dt)
        requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
}

/**
 * @typedef {Function} updateFunction a function that is executed each frame
 * @param {Game} game The game in wich the update function is runing
 * @param {Number} dt The time that passed betwen this and the last frame in ms
 */
/**
 * @typedef {Function} setupFunction a function that should setup data such as the Game
 * @returns {Game} The Game in wich everything runs
 */

export default start