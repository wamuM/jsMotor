function draw(game){
    clear(game.canvas,game.ctx)
}
function clear(canvas,ctx){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
export default draw;