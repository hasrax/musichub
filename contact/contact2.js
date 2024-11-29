//Initilizing variables (forms)
let song_info = document.getElementById("song-info");
let btn1 = document.getElementById("pay");

const billing_input1 = document.getElementById("fill-billing1");
const billing_input2 = document.getElementById("fill-billing2");
const billing_input3 = document.getElementById("fill-billing3");

//Input filled check on pay butoon click
let filled;
let form = document.getElementsByTagName("input");
let i;

function check_fillings(){
    for(i=0;i<3;i++){
        form[i].style.animation = "";
        if(form[i].value == "" || form[i].value < 000 && form[i].value > 999){
            alert("Please fill the contact details");
            form[i].style.animation = "color-alert 2s";
            filled = false;
            break;
        } else {
            form[i].style.animation = "color-alert-filled 2s";
            filled = true;
        }
    }
    console.log(filled);
}

btn1.addEventListener('click', ()=>{
    if(!filled){
        check_fillings();

    } else{
        alert("Completed!");
        
    }
});