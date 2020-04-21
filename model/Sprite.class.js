//Objeto base para todos os usuários como inimigos e jogadores.
export let Sprite = function (){

    let x,y // Eixos de direção.
    let speed // Velocidade de pixel por segundo.
    let spriteReady = false //Carregamento do sprite imagem.
    const sprite = new Image() //Imagem do sprite.
    const keysDown = {} // Objeto de teclas digitadas.
 
    //Quando o sprite for carregado torna-se true.
    sprite.onload = function (){
        spriteReady = true
    }

    //Recebendo url do caminho da imagem do sprite.
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

    //Quando o botão precionado o código do teclado é pego como referência e seu valor recebe true.
    //Lembre-se que: Estamos falando do eixo x e y onde os mesmo são colocados nas posições das imagens
    window.addEventListener('keydown',function(event){
        keysDown[event.keyCode] = true
    },false)

    //Quando não tiver mais precionado delete o objeto do código pego anteriormente.
    window.addEventListener('keyup',function(event){
        delete keysDown[event.keyCode] 
    },false)
    
    //direção do plano cartesiano. Cada número representa uma tecla especificamente
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