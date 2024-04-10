import { Component, OnInit } from '@angular/core';

enum Moneda {
  'USD' = 'Dolares',
  'EUR' = 'Euros',
  'LIB' = 'Libras',
}

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css'],
})
export class ConvertidorComponent implements OnInit {
  ngOnInit(): void {
    console.log('Monedas: ', this.monedas);
  }
  monedas: string[] = [Moneda['USD'], Moneda['EUR'], Moneda['LIB']];
  cantidad = 0;
  monedaActual = Moneda.USD;
  monedaDestino = Moneda.EUR;
  total = 0;

  precioMonedas = PrecioMonedas;

  convertir() {
    switch (this.monedaActual) {
      case Moneda.USD:
        switch (this.monedaDestino) {
          case Moneda.USD:
            this.total = this.cantidad;
            break;
          case Moneda.EUR:
            this.total = this.cantidad * this.precioMonedas.dollarToEuro;
            break;
          case Moneda.LIB:
            this.total = this.cantidad * this.precioMonedas.dollarToLibra;
            break;
        }
        break;
      case Moneda.EUR:
        switch (this.monedaDestino) {
          case Moneda.EUR:
            this.total = this.cantidad;
            break;
          case Moneda.USD:
            this.total = this.cantidad * this.precioMonedas.euroToDollar;
            break;
          case Moneda.LIB:
            this.total = this.cantidad * this.precioMonedas.euroToLibra;
            break;
        }
        break;
      case Moneda.LIB:
        switch (this.monedaDestino) {
          case Moneda.LIB:
            this.total = this.cantidad;
            break;
          case Moneda.EUR:
            this.total = this.cantidad * this.precioMonedas.libraToEuro;
            break;
          case Moneda.USD:
            this.total = this.cantidad * this.precioMonedas.libraToDollar;
            break;
        }
        break;
      default:
        throw new Error(`La moneda ${this.monedaActual} no es válida`);
    }
  }
}

enum PrecioMonedas {
  dollarToEuro = 0.92,
  dollarToLibra = 0.79,
  euroToLibra = 0.86,
  euroToDollar = 1.09,
  libraToDollar = 1.27,
  libraToEuro = 1.17,
}
