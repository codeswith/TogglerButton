let headinEl = document.getElementById("heading");

let toggle = true;

function onToggler(){

    if(toggle === true){
        headinEl.textContent = "Dynamically Changing Element...!";

        toggle= false;
    }
    else{
        headinEl.textContent = "Arc Technologies And Institutions";

        toggle=true;
    }

}