boil.Menu = function(){};

boil.Menu.prototype = {
    preload: function(){
        game.load.spritesheet('button', 'assets/images/start.png', 100, 58);
        game.load.image('background', 'assets/images/ok.png', 128, 58);

    },
    create: function(){
        game.add.sprite(0,0,'background')
        this.button = game.add.button(360, 400, 'button', this.actionOnClick, this, 1, 0, 1);
        
     console.log('You are in the Menu state');
    
    },
    actionOnClick: function() {
        changeState('Play');
        console.log('hi');
    },
    update: function(){
if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
            changeState('Play');
            }
        }
};