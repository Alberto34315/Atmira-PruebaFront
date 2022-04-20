import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-spinner',
  templateUrl: './load-spinner.component.html',
  styles: [],
})
export class LoadSpinnerComponent implements OnInit {
  public mostrarLoad = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarLoad = false;
    }, 5000);
  }
}
