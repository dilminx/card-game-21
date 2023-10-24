function main() {
    let x;
    let confirm =document.getElementById("result").innerHTML;
    if (confirm == "you Lost"){
      alert("Game over")
    }else{
    do {
        x = Math.floor(Math.random() * 100 / 7.6);
    } while (x == 0) {
        let tt = parseInt(document.getElementById("total").innerHTML);
        let ftt = tt + x;
        document.getElementById("total").innerHTML = ftt;

        if(ftt <21){
            document.getElementById("result").innerHTML="Genearate Another"
        }else if (ftt == 21) {
            document.getElementById("result").innerHTML = "CONGRAGULATIONS...! You Win!!"
            document.getElementById('reload').style.display= "block";
            document.getElementById('gen_btn').style.display = "none";
        } else {
            document.getElementById("result").innerHTML = "you Lost"
            document.getElementById('reload').style.display= "block";
            document.getElementById('gen_btn').style.display = "none";
        }

        let img = document.createElement("img");
        img.src = "images/" + x + ".png"
        document.body.appendChild(img);
        img.height = 250;

    }
}}
function reload(){
   location.reload();
}

