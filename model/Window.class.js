export let Window = function (argWidth,argHeight){

   let canvas,bgReady = false

   canvas = window.document.createElement('canvas')
   canvas.width = argWidth
   canvas.height = argHeight

   const ctx = canvas.getContext('2d')
   const bgImage = new Image()

   window.document.body.appendChild(canvas)

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
