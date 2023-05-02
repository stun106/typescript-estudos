var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var KitTurbo = /** @class */ (function () {
    function KitTurbo() {
        this.kitPadaria = 0;
    }
    KitTurbo.prototype.getInstall = function () {
        return this.kitPadaria;
    };
    KitTurbo.prototype.setInstall = function () {
        this.kitPadaria = 150;
    };
    return KitTurbo;
}());
var Carros = /** @class */ (function (_super) {
    __extends(Carros, _super);
    function Carros(model, factory, power) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.factory = factory;
        _this.power = power;
        _this.ligado = false;
        return _this;
    }
    Carros.prototype.get_ligado = function () {
        if (this.ligado === true) {
            return "status: ".concat(this.ligado, " - Carro ligado.");
        }
        else {
            return "status: ".concat(this.ligado, " - Carro desligado.");
        }
    };
    Carros.prototype.set_ligado = function (question) {
        if (question == "yep") {
            this.ligado = true;
        }
    };
    return Carros;
}(KitTurbo));
var meuNovoCarro = new Carros("CivicSI", "Honda", 250);
console.log("Carro:".concat(meuNovoCarro.model, " Potencia: ").concat(meuNovoCarro.power));
meuNovoCarro.setInstall();
console.log("kit turbo instalado: Potencia atual - ".concat(meuNovoCarro.getInstall() + meuNovoCarro.power));
meuNovoCarro.set_ligado("yep");
console.log(meuNovoCarro.get_ligado());
