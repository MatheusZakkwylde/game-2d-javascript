//Objeto janela principal do jogo
export let Window = function (argWidth,argHeight){

   let canvas,bgReady = false
   //Criação do objeto canvas passando seu tamanho
   canvas = window.document.createElement('canvas')
   canvas.width = argWidth
   canvas.height = argHeight
   //Definindo o tipo de canvas
   const ctx = canvas.getContext('2d')
   //Objeto imagem de fundo do game
   const bgImage = new Image()
   //adicionado o canvas no body do arquivo principal
   window.document.body.appendChild(canvas)
   
   //Quando a imagem carregada torne-se true
   bgImage.onload = function(){
         bgReady = true
   }

   this.setBgImage = function(argBgImage){
      bgImage.src = argBgImage
   }

   this.getBgImage = function(){
      return bgImage
   }

   this.getBgReady = function(){
      return bgReady
   }
    // método render responsável por renderizar todos os objetos na tela passando se a imagem já foi
    //carregada pelo argReady, o src da imagem pelo argImage e os elemento x e y do campo cartesiano
    //do documento onde os dados serão renderizados.
   this.render = function(argReady,argImage,argX,argY){
      if(argReady){
         ctx.drawImage(argImage,argX,argY) 
      }
   }
 
   this.getWidth = function(){
      return canvas.width
   }
 
   this.getHeight = function(){
      return canvas.height
   }
}
