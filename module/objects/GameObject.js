/**
 * The base object of all module related objects
 */
class GameObject{
    /**
     * Creates a gameObject
     * @param {Number} x x coord
     * @param {Number} y y coord
     * @param {Number} [r] rotation in radians
     * @param {Number|String} [id] the identifier of the GameObject (gets updated when placed into a sceene)
     * @param {Array<Sprite>} [sprites] An Array of Sprites references 
     * @todo we need to do so they are references (sprites and scripts) and not the objects themselves
     * @param {Hitbox} [hitbox] A Hitbox object
     * @param {Array<Script>} [scripts] An Array of Scripts references ScriptSet object that will run scripts each tick if the gameObject is loaded
     * @param {Kinkship} [kinship] A kinship object that references a parent gameObject and a set of childrens gameObjects
     * @param {Animator} [animator] An animator object
     */
    constructor(x,y,r,id,sprites,hitbox,scripts,kinship,animator){
        this.x = x
        this.y = y
        this.r = r
        this.id = id;
        this.sprites = sprites || false
        this.hitbox = hitbox   || false
        this.scripts = scripts || false
        this.kinship = kinship || false
        /**
         * The sprite that will be drawn this frame
         * @type {Number} 
         */
        this.currentSprite = 0
         /**
         * If the gameObject should be loaded  
         * @type {Boolean} 
         */
        this.loaded = true
    }
}
/**
 * @typedef {Function} Script
 * @param {Object} gameObject The GameObject that the script is linked to
 * @param {Object} game The Game in wich the GameObject has been loaded 
 * @param {Number} dt The delta time
 */
/**
 * @typedef {Object} Kinkship
 * @property {Number} parent
 * @property {Array<Number>} childrens
 */
export default GameObject