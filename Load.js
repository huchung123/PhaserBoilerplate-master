var boil = {};

boil.Load = function(){};

boil.Load.prototype = {
    create: function(){
        console.log('You are in the Load state');
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = game.scale.pageAlignVertically = true;
        game.time.events.add(100, function(){ changeState('Menu') });
//        game.input.onDown.add(gofull, this);
    }
};

function changeState(state){
    game.state.start(state);
}
//function gofull() {
//
//    if (game.scale.isFullScreen)
//    {
//        game.scale.stopFullScreen();
//        
//    }
//    else
//    {
//        game.scale.startFullScreen(false);
//        
//    }
//
//}