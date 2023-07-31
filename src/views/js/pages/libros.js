class Libros {
    constructor() {
        this.showClass;
        this.aOption = [
            {
                subject: "Seleccionar", filter: function (el) {
                    return true;
                }
            }
            , {
                subject: "Autor", filter: function (el, main) {
                    const largo = main.searchText.length;
                    return el.autor.toUpperCase().substring(0, largo) === main.searchText.toUpperCase();
                }
            }, {
                subject: "Publicación", filter: function (el, main) {
                    const largo = main.searchText.length;
                    return el.publicacion === parseInt(main.searchText);
                }
            }, {
                subject: "Editorial", filter: function (el, main) {
                    const largo = main.searchText.length;
                    return el.editorial === main.searchText;
                }
            }];
        this.searchText = "";
        this.filterOption = this.aOption[0];
        this.content = document.createElement("main");
        this.content.id = "content";
    }
    crearBuscador() {
        const buscador = document.createElement("div");
        buscador.id = "id-buscador";
        return buscador;
    }
    /*mostrarContenido() -> dibujarLibro()*/
    dibujarLibro(libro, cajaContenedora) {
        console.log(libro.nombre);
        //crear 
        const root = document.getElementById("root");
        const div = document.createElement("div");  
        div.className = "content";
        const divImg = document.createElement("div"); 
        divImg.id = "div_img_libro";
        divImg.className = "div_img_libro";

        const imagen = document.createElement("img"); 

        const titulo = document.createElement("h3"); 
        const autor = document.createElement("p"); 
        autor.style.lineHeight = "2";
        const editorial = document.createElement("p"); 
        const descripcion = document.createElement("textarea"); 

        descripcion.className = "descripcion";
        const año = document.createElement("p"); 

        // personalizar
        imagen.src = libro.img;
        titulo.textContent = libro.titulo;
        año.textContent = libro.publicacion;
        autor.textContent = libro.autor;
        editorial.textContent = libro.editorial;
        descripcion.textContent = libro.descripcion;

        //  composicion
        divImg.appendChild(imagen);
        div.appendChild(divImg);
        div.appendChild(titulo);
        div.appendChild(autor);
        div.appendChild(año);
        div.appendChild(descripcion);
        cajaContenedora.appendChild(div);
        root.appendChild(cajaContenedora);
    }

    /*mostrarContenido() mostramos el resultado*/
    mostrarContenido(data) {
        this.borrar(main);
        const libros = data.libros;
        const mainContainer = document.getElementById("main");
        console.log(libros);

        libros.map(libro => {
            if (this.filterOption.filter(libro, this))
                this.dibujarLibro(libro, mainContainer)
        });
    }/*fin mostrarContenido()*/

    borrar(value) {
        const mainContainer = document.getElementById("main");
        if (!mainContainer) return;
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
    }




    /*traerDatos() hacemos el fetch a los datos*/
    traerDatos() {
        fetch("src/json/libros.json").then(result => result.json()).
            then(data => this.mostrarContenido(data));
    }
}
export default Libros;