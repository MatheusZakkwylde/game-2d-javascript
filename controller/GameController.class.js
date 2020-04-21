import {Window} from '../model/Window.class.js'
import {Sprite} from '../model/Sprite.class.js'

window.onload = function (){

    const Game = new Window(640,307)
    const Hero = new Sprite()
    const Monster = new Sprite()
    let monsterCaught = 0

    Game.setBgImage('../static/img/game.gif')
    Hero.setSprite('../static/img/deadpool-pixel-art-32x-32.png')
    Hero.setSpeed(250)
    Monster.setSprite('../static/img/deadpool-pixel-art-32x-32.png')

    const reset = function(){
        Hero.setX(Game.getWidth() / 2)
        Hero.setY(Game.getHeight() /2)

        Monster.setX(32 + (Math.random() * (Game.getWidth() - 64)))
        Monster.setY(32 + (Math.random() * (Game.getHeight() - 64)))
    }

    const update = function(modifier){

        Hero.keyboard(modifier)

        //collide sprites
        if( 
            Hero.getX() <= (Monster.getX()+32) && Monster.getX() <= (Hero.getX()+32) &&
            Hero.getY() <= (Monster.getY()+32) && Monster.getY() <= (Hero.getY()+32)
          ){
              ++monsterCaught
              reset()
          }
      }

    const main = function(){
        const now = Date.now()
        const delta = now - then
      
        update(delta /1000)
        
        Game.render(Game.getBgReady(),Game.getBgImage(),0,0)
        Game.render(Hero.getSpriteReady(),Hero.getSprite(),Hero.getX(),Hero.getY())
        Game.render(Monster.getSpriteReady(),Monster.getSprite(),Monster.getX(),Monster.getY())
        then = now
      
        requestAnimationFrame(main)
    }

    const w = window
    const requestAnimationFrame =  w.requestAnimationFrame || w.webkitRequestAnimationFrame
    let then = Date.now()
    reset()
    main()
}
