import Main from "./main.js";
import Inicio from "../pages/inicio.js";
import Libros from "../pages/libros.js";
import AcercaDe from "../pages/acercaDe.js";
import Alumnos from "../pages/alumnos.js";

class Header {
    constructor() {
        this.main = new Main();
        this.libros = new Libros();
        this.alumnos = new Alumnos();
        this.container;
        this.buscador;

        // this.libros.searchText = "";
        // this.libros.filterOption = this.libros.aOption[0];

        this.acercaDe;
        this.redesSociales = [{
            red: "Facebook",
            url: "https://www.facebook.com/acumar.riachuelo",
            icon: "src/views/assets/icons/facebook.png"
        },
        {
            red: "Twitter",
            url: "https://twitter.com/acumarriachuelo",
            icon: "src/views/assets/icons/twitter.png"
        },
        {
            red: "Youtube",
            url: "https://www.youtube.com/c/AcumarRiachuelo",
            icon: "src/views/assets/icons/youtube.png"
        },
        {
            red: "Instagram",
            url: "https://www.instagram.com/acumar.riachuelo/",
            icon: "src/views/assets/icons/instagram.png"
        }];

        this.links = [{
            title: "Inicio",
            url: "#Inicio",
            onclick: function () {
                if (this.alumnos.carrousel)
                    this.alumnos.carrousel.stop();

                this.inicio = new Inicio();

                console.log(this.inicio);
                this.main.borrarBuscador("id-buscador");

                this.main.borrar("main");
                this.main.crearMain();

                this.inicio.crearInicio();
            }.bind(this)
        },
        {
            title: "Libros",
            url: "#Libros",
            onclick: function () {
                if (this.alumnos.carrousel)

                    this.alumnos.carrousel.stop();


                console.log(this.libros);
                this.main.borrar("main");
                this.main.borrar("id-buscador");

                this.setBuscador(this.libros.crearBuscador());
                this.container = document.getElementById("container");
                this.container.appendChild(this.buscador);
                this.main.crearMain();

                this.populateHeader();
                // this.libros.traerDatos();
            }.bind(this)
        },
        {
            title: "Acerca de",
            url: "#AcercaDe",
            onclick: function () {
                if (this.alumnos.carrousel)
                    this.alumnos.carrousel.stop();
                this.acercaDe = new AcercaDe();

                console.log(this.libros);
                this.main.borrarBuscador("id-buscador");
                this.main.borrar("main");

                this.main.crearMain();
                this.acercaDe.crearAcercaDe();
            }.bind(this)
        },
        {
            title: "Alumnos",
            url: "#Alumnos",
            onclick: function () {
                console.log(this.alumnos);
                this.main.borrarBuscador("id-buscador");
                this.main.borrar("main");

                this.main.crearMain();
                this.alumnos.crearAlumnos();
            }.bind(this)
        }];
    }
    setBuscador(p) {
        this.buscador = p;
    }
    crearHeader() {
        const header = document.createElement("header");
        const divImgHead = document.createElement("div");
        const container = document.createElement("div");
        const titleContainer = document.createElement("div");
        const linksContainer = document.createElement("div");
        const imgHead = document.createElement("img");
        const divRedesSociales = document.createElement("div");

        imgHead.src = "https://www.acumar.gob.ar/wp-content/uploads/2016/12/Logo-Acumar-Color-1.png";
        divImgHead.id = "divImgHead";
        container.id = "container";
        divRedesSociales.id = "redesSociales";
        titleContainer.id = "titleContainer";
        linksContainer.id = "linksContainer";

        this.redesSociales.map((el) => {
            const a = document.createElement("a");
            const imgRS = document.createElement("img");

            a.href = el.url;
            imgRS.src = el.icon;

            a.appendChild(imgRS);
            divRedesSociales.appendChild(a);
        });

        this.links.map((el) => {
            const a = document.createElement("a");

            a.textContent = el.title;
            a.href = el.url;
            a.onclick = el.onclick;

            linksContainer.appendChild(a);
        });

        divImgHead.appendChild(imgHead);
        titleContainer.appendChild(divImgHead);
        titleContainer.appendChild(divRedesSociales);

        container.appendChild(titleContainer);
        container.appendChild(linksContainer);

        header.appendChild(container);
        root.appendChild(header);

    }
    populateHeader() {
        //  const main = document.getElementById("buscador");
        // creamos 
        const inputSearch = document.createElement("input");
        const selector = document.createElement("select");
        const btnOk = document.createElement("button");

        // personalizamos 
        inputSearch.id = "i_search";
        this.libros.aOption.map((el) => {
            const element = document.createElement("option");
            element.textContent = el.subject;
            selector.appendChild(element);

        })
        selector.onchange = function (ev) {
            this.libros.searchText = "";
            this.libros.filterOption = this.recuperarObj(ev.target.value);
            console.log(`Seleccionó elemento ${this.libros.filterOption}`);

        }.bind(this);
        btnOk.textContent = "Buscar";
        btnOk.onclick = function (ev) {
            ev.preventDefault();
            this.borrar();
            this.traerDatos();
        }.bind(this.libros);
        inputSearch.value = this.libros.searchText;
        inputSearch.onchange = function (ev) {
            this.searchText = ev.target.value;
            console.log(`Busca texto ${this.searchText}`)
        }.bind(this.libros);
        inputSearch.onkeyup = function (ev) {
            this.libros.searchText = this.getInput().value;
            console.log(this.libros.searchText);
            this.libros.traerDatos();
        }.bind(this);
        // componemos 
        this.buscador.appendChild(inputSearch);
        this.buscador.appendChild(selector);
        this.buscador.appendChild(btnOk);

        this.libros.traerDatos();

    }
    getInput() {
        return document.getElementById("i_search");
    }
    recuperarObj(clave) {
        const result = this.libros.aOption.filter(el => el.subject === clave);
        console.log(result);
        return result[0];
    }
}
export default Header;