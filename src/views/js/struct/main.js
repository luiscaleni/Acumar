class Main {
    constructor() {
        this.root = document.getElementById("root");
        this.main = document.createElement("main");
        this.cover = document.createElement("div");
      
        this.imgCover = document.createElement("img");

        this.main.id = "main";
        this.cover.id = "cover";
        this.imgCover.src = "https://www.acumar.gob.ar/wp-content/uploads/2023/02/Escuelas-por-la-Cuenca-2023_WEB-1024x604.jpg";

        this.cover.appendChild(this.imgCover);
        this.main.appendChild(this.cover);
        this.root.appendChild(this.main);
  
    }
    crearMain() {
        const main = document.getElementById("main");
        if (!main) {
            const mainContainer = document.createElement("main");
            mainContainer.id = "main";
            this.root.appendChild(mainContainer);
            return this.root;
        }
    }

    borrar(value) {
        const idElement = document.getElementById(value);
        console.log(idElement);
        if(idElement) {
            this.root.removeChild(idElement);
            console.log("se borro: " + idElement);
        }
    }
    borrarBuscador(value) {
        const containerId = document.getElementById("container");
        const valueId=document.getElementById(value);
        if(valueId) {
            containerId.removeChild(valueId);
            console.log("se borro: " + valueId);
        }else{
            console.log("error");
        }
    }
}
export default Main;