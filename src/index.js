const {createCanvas, getSample, getDimensions} = require('skqw-core');


let ctx;
function init() {
    ctx = createCanvas().getContext('2d');
}
function tick() {
    const { width, height } = getDimensions();
    const { ft } = getSample();
    
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, width, height);
    
    // draw the visualization frame
    drawBars(width, height, ft);
}
function drawBars(w, h, ft) {
    const length = ft.length;
    const width = w / length;
    
    // The bars will be red
    ctx.fillStyle = `hsla(0, 50%, 50%, 0.8)`;
    for(let i = 0; i < ft.length; i++) {
        const height = ft[i] * 250;
        const x = i * width;
        const y = h - height;
        ctx.fillRect(x, y, width - 2, height);
    }
}
module.exports = {
    name: 'Simple Example',
    init,
    tick
};
