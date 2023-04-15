let views = document.querySelector(".views");
let cost = document.querySelector (".price");
let slider = document.getElementById ("vol");
let toggle =  document.getElementById("billing");

let pageViews = ['10k','50k','100k','500k','1M'];
let perMonth = [8, 12, 16, 24, 36];

let isYearly = false;

slider.addEventListener('input',function(){
updateValue();
views.innerHTML = pageViews[slider.value]
})

toggle.addEventListener('change', function(){
if(isYearly == false){
    isYearly= true
}else{ isYearly = false
    }
    updateValue()
})

function updateValue(){
    if(isYearly){
        cost.innerHTML=(perMonth[slider.value]*.75).toFixed(2)
    } else{
        cost.innerHTML=(perMonth[slider.value]).toFixed(2)
    }
}