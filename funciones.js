const Vw = window.screen.width;
const Vh = window.screen.height;
let WProp_d = Vw / Vh;
const WProp = WProp_d.toFixed(1);
const estilo = document.documentElement.style;

console.log (Vw + " " + Vh);

console.log (WProp);

let landscape;

if (WProp >= 1) {
  landscape = true;
}else{
  landscape = false;
}

console.log ("landscape = " + landscape);



if (landscape == true) {

  console.log("vista de lado");

}else{

  estilo.setProperty("--mobile","block");
  estilo.setProperty("--lap","none");
  console.log ("vista de alto");

}


let isMdys = false

function mobmenu () {
  console.log ("boton presionado");
  if (isMdys==false) {
    isMdys=true
    estilo.setProperty("--TCb","0.2s");
    estilo.setProperty("--DCb","0.7s");
    estilo.setProperty("--DHb","0.2s");
    estilo.setProperty("--THb","0.7s");
    estilo.setProperty("--BTdML","30vw");
    estilo.setProperty("--BTdMR","30vw");
    estilo.setProperty("--BTdH","12vh");
    estilo.setProperty("--BTc","#080");
    estilo.setProperty("--BTbc","#353");
    estilo.setProperty("--Mw","80vw");
    estilo.setProperty("--Mh","100vh");
    estilo.setProperty("--LOGOD","13.5vh");
    estilo.setProperty("--MDh","13.5vh");
    estilo.setProperty("--MDb","#fff");
  }else{
    isMdys=false
    estilo.setProperty("--TCb","0.2s");
    estilo.setProperty("--DCb","0s");
    estilo.setProperty("--DHb","0.2s");
    estilo.setProperty("--THb","0.7s");
    estilo.setProperty("--BTdML","40vw");
    estilo.setProperty("--BTdMR","20vw");
    estilo.setProperty("--BTdH","10vh");
    estilo.setProperty("--BTc","transparent");
    estilo.setProperty("--BTbc","transparent");
    estilo.setProperty("--Mw","100vw");
    estilo.setProperty("--Mh","10vh");
    estilo.setProperty("--LOGOD","0");
    estilo.setProperty("--MDh","10vh");
    estilo.setProperty("--MDb","transparent");
  }
  console.log (isMdys)
}