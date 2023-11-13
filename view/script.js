import Player from '../models/Player.js';


window.addEventListener("keydown",(event)=>{
    
    let player = new Player();

    switch (event.key) {
        case 'a':
            player.draw();
            console.log("a")
            break;
    
        default:
            break;
    }
});