export let Sprite = function (){

    let x,y,speed,spriteReady = false
    const sprite = new Image(), keysDown = {}
 
    sprite.onload = function (){
        spriteReady = true
    }

    this.setSprite = function(argSprite){
        sprite.src = argSprite
    }

    this.getSprite = function (){
        return sprite
    }

    this.getSpriteReady = function(){
        return spriteReady
    }

    this.setX = function (argX){
        x = argX
    }

    this.getX = function (){
       return x
    }

    this.setY = function (argY){
        y = argY
    }

    this.getY = function (){
        return y
    }

    this.setSpeed = function (argSpeed){
        speed = argSpeed
    }

    this.getSpeed = function(){
        return speed
    }

    window.addEventListener('keydown',function(event){
        keysDown[event.keyCode] = true
    },false)

    window.addEventListener('keyup',function(event){
        delete keysDown[event.keyCode] 
    },false)

    this.keyboard = function(modifier){

        if(38 in keysDown){ //keyboard up
           y -= speed * modifier
        }
      
        if(40 in keysDown){//keyboard low
          y += speed * modifier
        }
      
        if(37 in keysDown){//keybord left
          x -= speed * modifier
        }
      
        if(39 in keysDown){//keyboard rigth
          x += speed * modifier
        }
    }
}