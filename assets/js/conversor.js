(function(exports) {
  "use strict";

  function Medida(valor,tipo)
  {
      this.valor = valor;
      this.tipo = tipo || "";
  }

  function Temperatura(valor,tipo)
  {
    Medida.call(this, valor, tipo);
  }

  Temperatura.prototype = new Medida ();
  Temperatura.prototype.constructor = Temperatura;

  function Celsius(valor)
  {
    Temperatura.call(this, valor);
  }

  Celsius.prototype = new Temperatura();
  Celsius.prototype.constructor = Celsius;

  Celsius.prototype.toFahrenheit = function () {
    var result = (this.valor * 9/5)+32;
    return result;
  }

  Celsius.prototype.toKelvin = function () {
    var result = this.valor + 273.15;
    return result;
  }

  function Kelvin(valor)
  {
    Temperatura.call(this, valor);
  }

  Kelvin.prototype = new Temperatura();
  Kelvin.prototype.constructor = Kelvin;

  Kelvin.prototype.toCelsius = function () {
    var result = this.valor - 273.15;
    return result;
  }

  Kelvin.prototype.toFahrenheit = function () {
    var result = ((this.valor - 273.15) * 9/5) + 32;
    return result;
  }

  function Fahrenheit(valor)
  {
    Temperatura.call(this, valor);
  }

  Fahrenheit.prototype = new Temperatura();
  Fahrenheit.prototype.constructor = Fahrenheit;

  Fahrenheit.prototype.toCelsius = function () {
    var result = (this.valor - 32) * 5/9;
    return result;
  }

  Fahrenheit.prototype.toKelvin = function () {
    var result = ((this.valor - 32) / (9/5)) + 273.15;
    return result;
  }

  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Fahrenheit = Fahrenheit;
  exports.Kelvin = Kelvin;

  exports.convertir = function() {
    var valor     = document.getElementById('convert').value,
        elemento  = document.getElementById('converted'),
        /* Extienda la RegeExp a la especificación. use una XRegExp */
        regexp    = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z,A-Z]+)\s*$/i;
        entrada = XRegExp('^\s*(?<val> [-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)  \n' +
                          '\s*(?<tip> (?:f(?:a(?:r(?:e(?:n(?:h(?:e(?:i(?:t)?)?)?)?)?)?)?)?)|(?:c(?:e(?:l(?:s(?:i(?:u(?:s)?)?)?)?)?)?)|(?:k(?:e(?:l(?:v(?:i(?:n)?)?)?)?)?)) \n' +
                          '\s*(?:to)?\s*(?<to> [fck])$ ', 'i');
        valor     = valor.match(regexp);

    if (valor) {
      var numero = valor[1],
          tipo   = valor[2].toLowerCase();

      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo);

      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          elemento.innerHTML = celsius.toFahrenheit().toFixed(2) + " Fahrenheit";
          break;
        case 'f':
          var fahrenheit = new Fahrenheit(numero);
          elemento.innerHTML = fahrenheit.toCelsius().toFixed(2) + " Celsius";
          break;

        default:
          /* rellene este código */
      }
    }
    else
      elemento.innerHTML = "";
  }
})(this);
