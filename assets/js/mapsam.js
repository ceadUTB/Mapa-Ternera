"use strict";
/*!Version: 1.1.6*/
var Variables = (function () {
    function Variables() {
        this.Locked = false;
    }
    Variables.prototype.getWH = function () {
        return this.WH_Aux;
    };
    Variables.prototype.getHG = function () {
        return this.HG_Aux;
    };
    Variables.prototype.getCoodinatesMax = function () {
        return this.Coordinates_max;
    };
    Variables.prototype.getMap = function () {
        return this.Contenedor_mapa;
    };
    Variables.prototype.getImgHG = function () {
        return this.ImgHG;
    };
    Variables.prototype.getImgWH = function () {
        return this.ImgWH;
    };
    Variables.prototype.getImgSRC = function () {
        return this.imgSRC;
    };
    Variables.prototype.setLocked = function () {
        this.Locked = true;
    };
    Variables.prototype.Unlock = function () {
        this.Locked = false;
    };
    Variables.prototype.setWH = function (Numero) {
        this.WH_Aux = Numero;
    };
    Variables.prototype.setHG = function (Numero) {
        this.HG_Aux = Numero;
    };
    Variables.prototype.setCoodinatesMax = function (Numero) {
        this.Coordinates_max = [-(Numero[0]), -(Numero[1])];
    };
    Variables.prototype.setMap = function (Elemento) {
        this.Contenedor_mapa = document.getElementById(Elemento);
        this.Contenedor_mapa.classList.add("map");
    };
    Variables.prototype.setImgHG = function (Numero) {
        this.ImgHG = Numero;
    };
    Variables.prototype.setImgWH = function (Numero) {
        this.ImgWH = Numero;
    };
    Variables.prototype.setImgSRC = function (SRC) {
        this.imgSRC = SRC;
    };
    return Variables;
}());
var Browser = (function () {
    function Browser() {
        this.UserAgent = navigator.userAgent;
        this.CursorsNameGrab = ['grab', '-moz-grab', '-webkit-grab'];
        this.CursorsNameGrabbing = ['grabbing', '-moz-grabbing', '-webkit-grabbing'];
    }
    Browser.prototype.gotBrowserName = function (UserAgent) {
        var BrowserName = "Unknown";
        (UserAgent.indexOf("Opera") || UserAgent.indexOf('OPR')) != -1 ? BrowserName = "Opera" : false;
        (UserAgent.indexOf("Chrome")) != -1 ? BrowserName = "Chrome" : false;
        (UserAgent.indexOf("Safari")) != -1 ? BrowserName = "Safari" : false;
        (UserAgent.indexOf("Firefox")) != -1 ? BrowserName = "Firefox" : false;
        (UserAgent.indexOf("MSIE")) != -1 ? BrowserName = "IE" : false;
        return BrowserName;
    };
    Browser.prototype.gotCursorName = function () {
        switch (this.gotBrowserName(this.UserAgent)) {
            case "Opera":
                return [this.CursorsNameGrab[0], this.CursorsNameGrabbing[0]];
            case "IE":
                return [this.CursorsNameGrab[0], this.CursorsNameGrabbing[0]];
            case "Firefox":
                return [this.CursorsNameGrab[1], this.CursorsNameGrabbing[1]];
            case "Chrome":
                return [this.CursorsNameGrab[2], this.CursorsNameGrabbing[2]];
            case "Safari":
                return [this.CursorsNameGrab[2], this.CursorsNameGrabbing[2]];
            default:
                return [this.CursorsNameGrab[0], this.CursorsNameGrabbing[0]];
        }
    };
    return Browser;
}());
var Css = (function () {
    function Css() {
        this.Styles = ".map{ margin: 0px; padding: 0px; overflow: hidden; border: 1px #000 solid; cursor: grab; cursor: -moz-grab; cursor: -webkit-grab; background-repeat: no-repeat; } .PointVisible{ visibility: visible; animation: float 2s ease-in-out infinite; } .Visible{ visibility: visible; } .Invisible{ visibility: hidden; }  @keyframes float { 0% { box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); transform: translatey(0px); } 50% { box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2); transform: translatey(-5px); } 100% { box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); transform: translatey(0px); } } .popover p{ padding: 5px; } .popover h4 { text-align:center; } .ac-container{width: 250px;margin: 10px auto 30px auto;} .ac-container label{font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;padding: 5px 20px;position: relative;z-index: 20;display: block;height: 30px;cursor: pointer;color: #777;text-shadow: 1px 1px 1px rgba(255,255,255,0.8);line-height: 33px;font-size: 19px;background: linear-gradient(top, #ffffff 1%,#eaeaea 100%);box-shadow:0px 0px 0px 1px rgba(155,155,155,0.3),1px 0px 0px 0px rgba(255,255,255,0.9) inset,0px 2px 2px rgba(0,0,0,0.1);} .ac-container label:hover{background: #fff;} .ac-container input:checked + label,.ac-container input:checked + label:hover{background: #c6e1ec;color: #3d7489;text-shadow: 0px 1px 1px rgba(255,255,255, 0.6);box-shadow:0px 0px 0px 1px rgba(155,155,155,0.3),0px 2px 2px rgba(0,0,0,0.1);} .ac-container label:hover:after,.ac-container input:checked + label:hover:after{content: '';position: absolute;width: 24px;height: 24px;right: 13px;top: 7px;} .ac-container input:checked + label:hover:after{} .ac-container input{display: none;} .ac-container article{background: rgba(255, 255, 255, 0.5);margin-top: -1px;overflow: hidden;height: 0px;position: relative;z-index: 10;transition:height 0.3s ease-in-out,box-shadow 0.6s linear;}.ac-container input:checked ~ article{transition:height 0.5s ease-in-out,box-shadow 0.1s linear;box-shadow: 0px 0px 0px 1px rgba(155,155,155,0.3);} .ac-container article p{font-style: italic;color: #777;line-height: 23px;font-size: 14px;padding: 10px;text-shadow: 1px 1px 1px rgba(255,255,255,0.8);} .ac-container input:checked ~ article.ac-medium{height: 360px;} .ac-container article img{max-width:250px; max-heigth:150px}";
    }
    Css.prototype.Config = function (StylesConfig) {
        var StylePoint = ".Point{ border-radius: 100%;  cursor: pointer; position: absolute; ";
        var StylePopOver = ".popover{ position: absolute; width: 250px; -webkit-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);-moz-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75); ";
        if (StylesConfig.Punto) {
            StylesConfig.Punto.background_color ? StylePoint += "background-color: " + StylesConfig.Punto.background_color + ";" : StylePoint += "background-color: #fff;";
            StylesConfig.Punto.border_color ? StylePoint += "border: 2px solid " + StylesConfig.Punto.border_color + ";" : StylePoint += "border: 2px solid #000;";
            StylesConfig.Punto.width ? StylePoint += "width: " + StylesConfig.Punto.width + "px;" : StylePoint += "width: 30px;";
            StylesConfig.Punto.height ? StylePoint += "height: " + StylesConfig.Punto.width + "px; }" : StylePoint += "height: 30px; }";
            StylesConfig.Punto.PopOver ?
                StylesConfig.Punto.PopOver.background_color ? StylePopOver += "background-color: " + StylesConfig.Punto.PopOver.background_color + "; }" : StylePopOver += "background-color: #fff;"
                : StylePopOver += "background-color: #fff;}";
        }
        else {
            StylePoint += "background-color: #fff;";
            StylePoint += "border: 2px solid #000;";
            StylePoint += "width: 30px;";
            StylePoint += "height: 30px; }";
            StylePopOver += "background-color: #fff;";
        }
        var Head = document.getElementsByTagName("head")[0];
        var Styles = document.createElement("style");
        Styles.innerText = this.Styles + StylePoint + StylePopOver;
        Head.appendChild(Styles);
    };
    return Css;
}());
var Mapa = (function () {
    function Mapa(Var, srcImage, Puntos) {
        this.Sum = 40;
        this.Rest = -40;
        this.bw = new Browser();
        this.Vertically = false;
        this.Horizontally = false;
        this.Var = Var;
        Var.getMap().style.backgroundImage = "url(" + srcImage + ")";
        this.y = Var.getImgHG();
        this.x = Var.getImgWH();
        this.Y_Max = Var.getHG() - this.y;
        this.X_Max = Var.getWH() - this.x;
        this.Coordinates_element = [(this.X_Max / 2), (this.Y_Max / 2)];
        this.moveBackground(this.Coordinates_element);
        var _this = this;
        Var.getMap().onmousedown = function (event_clic) {
            Var.getMap().style.cursor = _this.bw.gotCursorName()[1];
            _this.X_ini = event_clic.layerX;
            _this.Y_ini = event_clic.layerY;
            Var.Unlock();
            Var.getMap().onmousemove = function (evento_move) {
                if (evento_move.buttons === 1 && !Var.Locked) {
                    for (var i = 0; i < document.getElementsByClassName("popover").length; i++) {
                        Var.getMap().getElementsByClassName("popover")[i].classList.remove("Visible");
                        Var.getMap().getElementsByClassName("popover")[i].classList.remove("Invisible");
                        Var.getMap().getElementsByClassName("popover")[i].classList.add("Invisible");
                    }
                    _this.moveBackground(_this.getCoodinates(evento_move.layerX, evento_move.layerY));
                    _this.updateCoordenateMax();
                    for (var _i = 0, Puntos_1 = Puntos; _i < Puntos_1.length; _i++) {
                        var punto = Puntos_1[_i];
                        punto.CanIBeVisible();
                    }
                }
            };
        };
        Var.getMap().onmouseup = function (event_up) {
            Var.getMap().style.cursor = _this.bw.gotCursorName()[0];
        };
    }
    Mapa.prototype.moveBackground = function (Coordinates) {
        this.Var.getMap().style.backgroundPositionX = Coordinates[0].toString() + "px";
        this.Var.getMap().style.backgroundPositionY = Coordinates[1].toString() + "px";
    };
    Mapa.prototype.getCoodinates = function (X_fin, Y_fin) {
        var newCoordinates = this.Coordinates_element;
        var Y = (this.Y_ini - Y_fin);
        var X = (this.X_ini - X_fin);
        Y > 0 ? true : Y = (Y * -1);
        X > 0 ? true : X = (X * -1);
        (Y > X) ?
            (this.Y_ini < Y_fin) ? newCoordinates[1] = newCoordinates[1] + this.Sum : newCoordinates[1] = newCoordinates[1] + this.Rest
            :
                (this.X_ini < X_fin) ? newCoordinates[0] = newCoordinates[0] + this.Sum : newCoordinates[0] = newCoordinates[0] + this.Rest;
        newCoordinates[0] < this.X_Max ? newCoordinates[0] = this.X_Max : false;
        newCoordinates[0] > 0 ? newCoordinates[0] = 0 : false;
        newCoordinates[1] < this.Y_Max ? newCoordinates[1] = this.Y_Max : false;
        newCoordinates[1] > 0 ? newCoordinates[1] = 0 : false;
        return newCoordinates;
    };
    Mapa.prototype.updateCoordenateMax = function () {
        this.Var.getCoodinatesMax()[0] = Number(this.Var.getMap().style.backgroundPositionX.split("px")[0]) - this.Var.getWH();
        this.Var.getCoodinatesMax()[1] = Number(this.Var.getMap().style.backgroundPositionY.split("px")[0]) - this.Var.getHG();
    };
    return Mapa;
}());
var PopOver = (function () {
    function PopOver(Var, config) {
        this.coordenadas = [0, 0];
        this.Var = Var;
        config.titulo ? this.Titulo = config.titulo : false;
        config.acordeonItems ? this.items = config.acordeonItems : false;
        this.Elemento_Div = document.createElement("div");
        this.Elemento_P = document.createElement("h4");
        var Texto = document.createTextNode(this.Titulo);
        var hr = document.createElement("hr");
        this.Elemento_P.appendChild(Texto);
        this.Elemento_Div.appendChild(this.Elemento_P);
        this.Elemento_Div.appendChild(hr);
        this.Section = document.createElement("section");
        this.Section.classList.add("ac-container");
        this.Elemento_Div.appendChild(this.Section);
        this.Elemento_Div.style.height = Var.getHG() + "px";
        this.Elemento_Div.classList.add("Invisible");
        this.Elemento_Div.classList.add("popover");
        this.makeItems();
        this.Elemento_Div.style.cursor = "auto";
        this.Elemento_Div.onmouseup = function () {
            Var.setLocked();
        };
        this.Elemento_Div.onmousemove = function () {
            Var.setLocked();
        };
        Var.getMap().appendChild(this.Elemento_Div);
    }
    PopOver.prototype.setCordenadas = function (coordenadas) {
        this.coordenadas = coordenadas;
    };
    PopOver.prototype.getCordenadas = function () {
        return this.coordenadas;
    };
    PopOver.prototype.makeItems = function () {
        var i = 1;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            var div = document.createElement("div");
            var input = document.createElement("input");
            input.type = "radio";
            input.id = "ac-" + i + "-" + item.titulo;
            input.name = "accordion-1";
            var label = document.createElement("label");
            item.titulo ? label.htmlFor = "ac-" + i + "-" + item.titulo : false;
            item.titulo ? label.appendChild(document.createTextNode(item.titulo)) : false;
            var article = document.createElement("article");
            article.classList.add("ac-medium");
            var image = document.createElement("img");
            var p = document.createElement("p");
            item.imgSRC ? image.src = item.imgSRC : false;
            item.imgSRC ? article.appendChild(image) : false;
            item.imgSRC ? article.appendChild(document.createElement("br")) : false;
            item.descripcion ? p.appendChild(document.createTextNode(item.descripcion)) : false;
            item.descripcion ? article.appendChild(p) : false;
            div.appendChild(input);
            div.appendChild(label);
            div.appendChild(article);
            this.Section.appendChild(div);
            i = i + 1;
        }
    };
    PopOver.prototype.showUp = function () {
        this.Repositionate();
        this.Elemento_Div.classList.add("Visible");
        this.Elemento_Div.classList.remove("Invisible");
    };
    PopOver.prototype.disappear = function () {
        this.Elemento_Div.classList.add("Invisible");
        this.Elemento_Div.classList.remove("Visible");
    };
    PopOver.prototype.Repositionate = function () {
        (this.Var.getWH() - this.coordenadas[0]) < 300 ? this.Elemento_Div.style.left = "9px" : this.Elemento_Div.style.left = (this.Var.getWH() - 241) + "px";
    };
    return PopOver;
}());
var Punto = (function () {
    function Punto(Var, Coordenadas) {
        this.coordenadas = [0, 0];
        this.Var = Var;
        var _this = this;
        this.coordenadas_plano_imagen = [-(Coordenadas[0]), -(Coordenadas[1])];
        this.Elemento = document.createElement("div");
        this.Elemento.classList.add("Point");
        this.Elemento.classList.add("Invisible");
        Var.getMap().appendChild(this.Elemento);
        this.Elemento.onclick = function (event) {
            _this.showPopOver();
        };
    }
    Punto.prototype.CanIBeVisible = function () {
        ((((this.Var.getCoodinatesMax()[0] + this.Var.getWH()) >= this.coordenadas_plano_imagen[0]) && ((this.Var.getCoodinatesMax()[1] + this.Var.getHG()) >= this.coordenadas_plano_imagen[1]))
            &&
                ((this.Var.getCoodinatesMax()[0] <= this.coordenadas_plano_imagen[0]) && ((this.Var.getCoodinatesMax()[1] + this.Var.getHG()) >= this.coordenadas_plano_imagen[1]))
            &&
                (((this.Var.getCoodinatesMax()[0] + this.Var.getWH()) >= this.coordenadas_plano_imagen[0]) && (this.Var.getCoodinatesMax()[1] <= this.coordenadas_plano_imagen[1]))
            &&
                ((this.Var.getCoodinatesMax()[0] < this.coordenadas_plano_imagen[0]) && (this.Var.getCoodinatesMax()[1] < this.coordenadas_plano_imagen[1])))
            ? this.showUp() : this.disappear();
        this.Recoordenate();
    };
    Punto.prototype.showUp = function () {
        this.Elemento.classList.add("PointVisible");
        this.Elemento.classList.remove("Invisible");
    };
    Punto.prototype.disappear = function () {
        this.Elemento.classList.add("Invisible");
        this.Elemento.classList.remove("PointVisible");
    };
    Punto.prototype.Repositionate = function () {
        this.Elemento.style.left = this.coordenadas[0] + "px";
        this.Elemento.style.top = this.coordenadas[1] + "px";
    };
    Punto.prototype.Recoordenate = function () {
        this.coordenadas[0] = -1 * (-this.Var.getWH() - (this.Var.getCoodinatesMax()[0] - (this.coordenadas_plano_imagen[0])));
        this.coordenadas[1] = -1 * (-this.Var.getHG() - (this.Var.getCoodinatesMax()[1] - (this.coordenadas_plano_imagen[1])));
        this.Repositionate();
    };
    Punto.prototype.setPopOver = function (PopOver) {
        this.popover = PopOver;
        this.popover.setCordenadas(this.coordenadas);
    };
    Punto.prototype.showPopOver = function () {
        this.popover.showUp();
    };
    Punto.prototype.disappearPopOver = function () {
        this.popover.disappear();
    };
    return Punto;
}());
var mapsAM = (function () {
    function mapsAM() {
        this.Puntos = [];
    }
    mapsAM.prototype.Config = function (Config) {
        this.Var = this.getVariables(Config);
    };
    mapsAM.prototype.getVariables = function (Config) {
        var Var = new Variables();
        Config.DivContent ? Var.setMap(Config.DivContent) : this.SayError("Necesitas pasarnos el nombre del div");
        (Var.getMap().clientHeight != 0) ? Var.setHG(Var.getMap().clientHeight) : this.SayError("Necesitas definir el alto del div");
        (Var.getMap().clientWidth != 0) ? Var.setWH(Var.getMap().clientWidth) : this.SayError("Necesitas definir el ancho del div");
        (Var.getMap().clientHeight != 0) && (Var.getMap().clientWidth != 0) ? Var.setCoodinatesMax([Var.getMap().clientWidth, Var.getMap().clientHeight]) : this.SayError("Necesitas especificar el ancho y alto del div");
        Config.ImgHG ? Var.setImgHG(Config.ImgHG) : this.SayError("Necesitas definir el alto de la imagen");
        Config.ImgWH ? Var.setImgWH(Config.ImgWH) : this.SayError("Necesitas definir el ancho de la imagen");
        Config.imgSRC ? Var.setImgSRC(Config.imgSRC) : this.SayError("Necesitas definir una imagen de fondo");
        Config.Styles ? new Css().Config(Config.Styles) : new Css().Config({});
        return Var;
    };
    mapsAM.prototype.createMap = function () {
        return new Mapa(this.Var, this.Var.getImgSRC(), this.Puntos);
    };
    mapsAM.prototype.SayError = function (Mensaje) {
        throw new TypeError(Mensaje);
    };
    mapsAM.prototype.createNewPoint = function (Coordenadas, ConfigPopOver) {
        var aux = new Punto(this.Var, Coordenadas);
        aux.setPopOver(this.createNewPopOver(ConfigPopOver));
        this.Puntos.push(aux);
    };
    mapsAM.prototype.createNewPopOver = function (ConfigPopOver) {
        return new PopOver(this.Var, ConfigPopOver);
    };
    return mapsAM;
}());
var MapsAM = new mapsAM();
//# sourceMappingURL=mapsam.js.map