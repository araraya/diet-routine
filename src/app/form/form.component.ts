import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // deklarasi variabel jumlah kalori
  jumlahKalori = 0;



  log() {
    console.log(this.jumlahKalori);
  }
  constructor() { }

  ngOnInit(): void {
  }
}
