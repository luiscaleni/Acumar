class Inicio {
    constructor(){
    }
    crearInicio(){
        
        const h1 = document.createElement("h1");
        const main = document.getElementById("main");
        h1.style.color="#51B8B0";
        h1.textContent="¿Quienes Somos?";
        h1.style.lineHeight = "2";
        h1.style.fontSize ="60px";
        

        const h2 = document.createElement("h1");
        h2.textContent = "Recorrido por la Cuenca Matanza Riachuelo"
        h2.style.color ="#73579F";
        h2.style.marginBottom ="3rem";
        h2.style.fontSize ="44px";
        

        const p = document.createElement("p");
        p.textContent = "ACUMAR reúne a los gobiernos de la Nación, Provincia, Ciudad, a cada uno de los municipios y a otros organismos y empresas del Estado con el objetivo de coordinar las acciones necesarias para el saneamiento de la Cuenca. Si bien las líneas de gestión establecidas en el PISA se dirigen a aspectos distintos de la problemática, son encaradas a través de un abordaje integral ya que lograr el saneamiento implica pensar en la integralidad de la Cuenca.";
        p.style.marginBottom ="2rem";
       
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const imagen1 =document.createElement("img");
        imagen1.src = "../../src/views/assets/imagenes/inicio1.jpg";
        imagen1.style.width ="1200px";
        imagen1.style.marginBottom="4rem";

        const imagen2 =document.createElement("img");
        imagen2.src = "../../src/views/assets/imagenes/inicio2.jpg";
        imagen2.style.width ="1200px";

        const video = document.createElement("video");
        video.src = "../../src/views/assets/videos/acumar3.mp4";
        video.style.width = "1200px";
        video.style.marginBottom ="4rem";
        video.style.marginTop = "2rem";
        video.style.boxShadow ="0rem 0rem 0.6rem grey";
        video.autoplay = true;
        video.loop = true;
        

        div1.appendChild(imagen1);
        div2.appendChild(imagen2);
        main.appendChild(video)
        main.appendChild(h1);
        main.appendChild(p);
        main.appendChild(div1);
        main.appendChild(h2);
        main.appendChild(div2);
       
        
    }
}
export default Inicio;