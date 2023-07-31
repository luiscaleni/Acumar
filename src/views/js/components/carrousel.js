class Carrousel {
    constructor(root) {
        this.root = root;
        this.divCarrousel;
        this.handleTimer;
        this.indiceCarrousel = 0;
        this.arrayCarrousel = [];
        this.alumno = [
            
            {
                nombre: "Luis Caleni",
                carrera: "Diseño de Imagen y Sonido",
                correo: "luis.caleni@gmail.com",
                img: "../../src/views/assets/imagenes/LuisCaleni.jpg"
            },
            {
                nombre: "Soledad Merolla",
                carrera: "Diseño Grafico",
                correo: "soledadmerolla@gmail.com",
                img: "../../src/views/assets/imagenes/SoledadMerolla.jpg"
            },
            {
                nombre: "Leslie Alaya",
                carrera: "Diseño de Imagen y Sonido",
                correo: "lesliealaya66@gmail.com",
                img: "../../src/views/assets/imagenes/LeslieAlayaFlores.jpg"
            },
            {
                nombre: "Rocio Peralta",
                carrera: "Diseño Grafico",
                correo: "rocio.a.peralta18@gmail.com",
                img: "../../src/views/assets/imagenes/RocioPeralta.jpg"
            },
            {
                nombre: "Morena Joos",
                carrera: "Diseño Grafico",
                correo: "joosmorena@gmail.com",
                img: "../../src/views/assets/imagenes/MorenaJoos.jpg"
            }
        ];


    }

    stop() {
        clearInterval(this.handleTimer);
    }

    crearCarrousel(value) {
        const divContentCarrousel = document.createElement("div");

        divContentCarrousel.id="divContentCarrousel";

        divContentCarrousel.appendChild(value);
        this.root.appendChild(divContentCarrousel);
    }
    //
    getCarrousel() {
        const divContentCarrousel = document.getElementById("divContentCarrousel");
        return divContentCarrousel;
    }
    //
    getdivImg() {
        return document.getElementById("divImagen");
    }
    //
    setindiceCarrousel(numero) {
        this.indiceCarrousel = numero;

    }
    //
    borrar(id) {
        const div = document.getElementById(id);
        if (div) {
            while ((div.firstChild)) {
                const it = div.firstChild;
                div.removeChild(it);


            }
        }
    }
    //
    cambiafoto = () => {
        this.borrar('divContentCarrousel');
        if (this.indiceCarrousel > this.arrayCarrousel.length - 1) {
            this.indiceCarrousel = 0;
        }
        
        const divTarget = this.getCarrousel();
        const divCarrousel = document.createElement("div");

        divCarrousel.id="divCarrousel";

        if (divTarget) {
            divTarget.appendChild(this.arrayCarrousel[this.indiceCarrousel]);
            console.log("indice " + this.indiceCarrousel);
        }
        this.indiceCarrousel = this.indiceCarrousel + 1;
    }
    //
    crearEquipo() {
        this.alumno.map((element) => {
            this.divCarrousel = document.createElement("div");
            const divImagen = document.createElement("div");
            const imagen = document.createElement("img");
            const nombre = document.createElement("h2");
            const carrera = document.createElement("h4");
            const correo = document.createElement("p");

            carrera.style.lineHeight = "2";
            correo.style.lineHeight = "1";

            divImagen.id="divImagen";
            this.divCarrousel.id="divCarrousel";
            imagen.src = element.img;
            nombre.textContent = element.nombre;
            carrera.textContent = element.carrera;
            correo.textContent = element.correo;
            console.log(element);
            
            divImagen.appendChild(imagen);
            this.divCarrousel.appendChild(divImagen);
            this.divCarrousel.appendChild(nombre);
            this.divCarrousel.appendChild(carrera);
            this.divCarrousel.appendChild(correo);
            this.arrayCarrousel.push(this.divCarrousel);
        });
        this.crearCarrousel(this.arrayCarrousel[this.indiceCarrousel]);
    }
    //
    run() {
        this.handleTimer = setInterval(this.cambiafoto, 4000);
    }
    //


}


export default Carrousel;