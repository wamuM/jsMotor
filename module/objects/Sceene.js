import { Game } from "./Game";
import GameObject from "./GameObject";

/** 
 * A Map of GameObjects with extra features 
 * @extends Map
*/
class Sceene extends Map{
    /**
    * Creates a sceene.
    * @param {Iterable<GameObject>} [gameObjects] the gameObjects that you want in the sceene
    */
    constructor(gameObjects){
        super()
        for(let gameObject of gameObjects){
            this.add(gameObject)
        }
    }
    /**
     * A method that returns all the GameObject that match a given condition
     * @param {function(GameObject):boolean} condition the condition
     * @returns {Array} An Array of matching gameObjects, empty if none where found
     */
    find(condition){
        let match = []
        this.forEach((v,k)=>{
            if(condition(v))match.push(v)
        })
        return 
    }
    /**
     * Adds a gameObject to the sceene
     * @param {GameObject} gameObject The gameObject to be added
     * @param {Number|String} [id] The id that you want the gameObject to have
     * 
     */
    add(gameObject,id=this.size){
        while(this.has(id)){
           if(typeof id === "string") id = "Other "+id;
            else id++;
        }
        gameObject.id = id;
        this.set(id,gameObject)
    }
    /**
     * Executes the scripts of loaded gameObjects
     * @param {Game} game The game in wich this is running
     * @param {Number} dt the delta time of the animation frame
     * 
     */
    executeLoadedScripts(game,dt){
        this.find(go => go.loaded).forEach((go)=>{
            go.scripts.forEach(f=>{
                f(game,dt)
            })
        })
    }
}
export default Sceene