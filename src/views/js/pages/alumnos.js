import Carrousel from "../components/carrousel.js";
class Alumnos {
    constructor(){
        // this.carrousel;
        const main = document.getElementById("main");
    }
    crearAlumnos(){
        this.carrousel = new Carrousel(main);
        this.carrousel.crearEquipo();
        
        this.carrousel.run();
    }
}
export default Alumnos;