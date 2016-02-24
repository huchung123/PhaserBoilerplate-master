boil.Play = function(){};
var adam;
var speed = 6;
boil.Play.prototype = {
    preload: function(){
        game.load.image('trees', 'assets/Backgrounds/treeBG.png');
        game.load.spritesheet('adam', 'assets/spritesheets/adamSpritesheet.png', 240, 370);
        game.load.audio('music', 'assets/music.mp3');
        game.load.audio('jc', 'assets/johnC.mp3');
    },
    create: function(){
        console.log('You are in the Play state');
//        game.input.onDown.add(function(){
//            changeState('GameOver');
        
        music = game.add.audio('music');
        bgm = game.add.audio('jc');
    music.play();
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0, 0, 2813, 1000); 
        var tree = game.add.sprite(0, 0, 'trees');
        game.stage.backgroundColor = '#00FF00';
        adam = game.add.sprite(0, 450, 'adam');
        adam.scale.setTo(0.7, 0.7);
        adam.anchor.setTo(0.5, 0.5);
        adam.animations.add('walk', [0, 1, 2, 3, 4]);
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
        
        game.camera.follow(adam);
        game.camera.deadzone = new Phaser.Rectangle(750 - 300, 0, 600, 1000);
    },
    update: function(){
        
        game.physics.arcade.overlap(player, stars, collectStar, null, this);
        
        
              if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.x = adam.x + speed;
            adam.animations.play('walk', 20, true);
            adam.scale.setTo(0.7, 0.7);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x = adam.x - speed;
            adam.animations.play('walk', 20, true);
            adam.scale.setTo(-0.7, 0.7);
        }
        else{
            adam.animations.stop('walk');
            adam.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y = adam.y - speed;
            if(adam.y < 400){
                adam.y = 400;
            }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y = adam.y + speed;
        }
    }
};