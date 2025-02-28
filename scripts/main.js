const bgColors=["#f4f7ff","#ade8dd", "#e7f8d7", "#c8e3cd", "#eba6af", "#e1a4b6", "#d3ad9f", "#bae6f4", "#d5cbf5"];
let bgColorsIndex=0;
document.getElementById("body-bg-change").addEventListener("click", function(){
    document.body.style.backgroundColor=bgColors[bgColorsIndex];
    for(i=0; i<bgColors.length; i++){
        if(bgColorsIndex===bgColors.length){
            bgColorsIndex=0;
        }
        else{
            bgColorsIndex=bgColorsIndex+1;
        }       
    }
})