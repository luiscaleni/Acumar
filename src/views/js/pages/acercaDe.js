class AcercaDe {
    constructor(){}
    crearAcercaDe(){
        const divAcercaDe = document.createElement("div"); // contenedor todo 
        divAcercaDe.id = "divAcercaDe";
        const divImg = document.createElement("div"); //cont img
        divImg.id="divImagenDGPC";

        const imagen = document.createElement("img"); //cont img
        const titulo = document.createElement("h2"); // titulo 
        const subtitulo = document.createElement("h4"); // titulo 
        const descripcion1 = document.createElement("p"); //parrafo
        const descripcion2 = document.createElement("p"); //parrafo
        const descripcion3 = document.createElement("p"); //parrafo
        const guion = document.createElement("p");
        guion.textContent = "|";
        guion.style.color = "#73579F";

        const enlace = document.createElement("a");
        enlace.href = "https://instagram.com/catedradiazcortez?igshid=MzRlODBiNWFlZA==";
        enlace.textContent = "Instagram";
        enlace.style.color = "#73579F";
        enlace.style.textDecoration = "none";
        enlace.style.marginRight ="2rem";

        const enlace2 = document.createElement("a");
        enlace2.href = "https://www.dgpc.com.ar";
        enlace2.textContent = "Sitio Web";
        enlace2.style.color = "#73579F";
        enlace2.style.textDecoration = "none";
        enlace2.style.marginLeft ="2rem";


        imagen.src="../../src/views/assets/imagenes/dgpc.png";
        imagen.style.paddingTop="6rem";
        //imagen.style.paddingBottom ="0rem";

        titulo.textContent = "Diseño Gráfico por Computación";
        subtitulo.textContent= "Cátedra Díaz Cortez";
        subtitulo.style.lineHeight = "2";
        subtitulo.style.paddingBottom = "2rem";

        descripcion1.textContent= `Materia optativa cuatrimestral de DG y DIyS con promoción directa. Aprendizaje de diseño y programación de páginas web utilizando Estándares. HTML, CSS y JavaScript. Utilizamos un servidor web provisto por la Cátedra Díaz Cortez.`;
        

        divImg.appendChild(imagen);
        divAcercaDe.appendChild(divImg);
        divAcercaDe.appendChild(titulo);
        divAcercaDe.appendChild(subtitulo);
        divAcercaDe.appendChild(descripcion1);
        main.appendChild(divAcercaDe);
        main.appendChild(enlace);
        main.appendChild(guion);
        main.appendChild(enlace2);

    }
}
export default AcercaDe;