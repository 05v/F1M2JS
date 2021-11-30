
var position = 0;

var img1="https://via.placeholder.com/800x600png?text=1";
var img2="https://via.placeholder.com/800x600png?text=2";
var img3="https://via.placeholder.com/800x600png?text=3";
var img4="https://via.placeholder.com/800x600png?text=4";
var img5="https://via.placeholder.com/800x600png?text=5";
var img6="https://via.placeholder.com/800x600png?text=6";
var img7="https://via.placeholder.com/800x600png?text=7";
var img8="https://via.placeholder.com/800x600png?text=8";



function onClickNext(){
            
    var imgElement = document.getElementById("img");

    position = position + 1;

    if(position == 8){

        position = 0

    }

    console.log(position)

    if(position == 0){
        imgElement.src = img1;
        
    }

    if(position == 1){
        imgElement.src = img2;
        
    }

    if(position == 2){
        imgElement.src = img3;
        
    }

    if(position == 3){
        imgElement.src = img4;
        
    }
    
    if(position == 4){
        imgElement.src = img5;
        
    }

    if(position == 5){
        imgElement.src = img6;
        
    }

    if(position == 6){
        imgElement.src = img7;
        
    }

    if(position == 7){
        imgElement.src = img8;
        }

}

function onClickPrev(){
            
    var imgElement = document.getElementById("img");

    position = position - 1;

    if(position == -1){
        position = 7;
    }

    console.log(position)   
    
    if(position == 7){
        imgElement.src = img8;
    }

    if(position == 6){
        imgElement.src = img7;
    }

    if(position == 5){
        imgElement.src = img6;
    }
    
    if(position == 4){
        imgElement.src = img5;
    }

    if(position == 3){
        imgElement.src = img4;
    }
    
    if(position == 2){
        imgElement.src = img3;
    }

    if(position == 1){
        imgElement.src = img2;
    }

    if(position == 0){
        imgElement.src = img1;
    }

}