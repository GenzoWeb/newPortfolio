const autoText = function () {
    if(document.getElementById('text_auto')){
        const textAuto = document.getElementById('text_auto');
        const text = "Bienvenue sur mon portfolio";
        let index = 0;
    
        const randomNumber = function(min , max){
            return Math.floor(Math.random() * (max  - min) + min)
        }
    
        const play = function(){
            textAuto.innerHTML = text.slice(0, index)
            index ++
            if( index > text.length) {
                index = 0
            }
    
            clearInterval(timer)
            timer = setInterval(play, randomNumber(150, 300))
        }
        let timer = setInterval(play, 1)
    } 
}