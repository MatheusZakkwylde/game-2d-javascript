//Importação dos objetos principais do game.
import {Window} from '../model/Window.class.js'
import {Sprite} from '../model/Sprite.class.js'

window.onload = function (){
    //Criando o Game passando a altura e largura da foto de fundo para criar o tamanho do canvas.
    const Game = new Window(640,307)
    //Criando o guerreiro
    const Hero = new Sprite()
    //Criando o monstro
    const Monster = new Sprite()
    //Mostrar quantas veses o objeto foi pego
    let monsterCaught = 0
    //Setando as imagens dos objetos
    Game.setBgImage('../static/img/game.gif')
    Hero.setSprite('../static/img/deadpool-pixel-art-32x-32.png')
    Hero.setSpeed(500)
    Monster.setSprite('../static/img/deadpool-pixel-art-32x-32.png')
    //Método reset para definir onde os objetos serão criados
    //O heroi será criado sempre no meio
    //E o monstro sempre em qualquer lugar
    const reset = function(){
        Hero.setX(Game.getWidth() / 2)
        Hero.setY(Game.getHeight() /2)

        Monster.setX(32 + (Math.random() * (Game.getWidth() - 64)))
        Monster.setY(32 + (Math.random() * (Game.getHeight() - 64)))
    }

    //Método update responsável por sempre mudar os dados x é y dos objetos
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

    //Método principal
    const main = function(){
        //Pega os milesegundos do tempo presente quando a função main for chamado
        const now = Date.now()
        //subtrai o tempo atual do presente da chamada da função main menos o tempo atual do passado
        //Pega o resultado divido por 1000 e atualiza os dados do teclado
        update((now - pastTime) / 1000)
        //Renderizando as imagens dos objetos no jogo
        Game.render(Game.getBgReady(),Game.getBgImage(),0,0)
        Game.render(Hero.getSpriteReady(),Hero.getSprite(),Hero.getX(),Hero.getY())
        Game.render(Monster.getSpriteReady(),Monster.getSprite(),Monster.getX(),Monster.getY())
        // o tempo atual agora torna-se o tempo passado para que quando chamar a função
        //main novamente o tempo agora se torne o tempo agora do futuro.
        pastTime = now
        //Chamando o mais recursivamente
        requestAnimationFrame(main)
    }
    
    //Pega o tempo em milesegundos do tempo atual do presente que se tornárá o passado ao chamar o main
    let pastTime = Date.now()
    let now = function(){
        
    }
    const w = window
    const requestAnimationFrame =  w.requestAnimationFrame || w.webkitRequestAnimationFrame
    //resetando ou inicializando os dados do inicio do jogo
    reset()
    //Inicializando o jogo
    main()
}
