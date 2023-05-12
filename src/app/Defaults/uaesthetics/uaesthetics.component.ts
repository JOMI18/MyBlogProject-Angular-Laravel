import { Component, OnInit } from '@angular/core';
import { APIsService } from 'src/app/Services/apis.service';

@Component({
  selector: 'app-uaesthetics',
  templateUrl: './uaesthetics.component.html',
  styleUrls: ['./uaesthetics.component.css'],
})
export class UaestheticsComponent implements OnInit {
  loading = true;
  aesthetics: any = [];
  imagepath: any = 'http://jomi.com/Aesthetics/';
  page: number = 1;
  called = false;
  content: any;

  constructor(private aesthetic: APIsService) {
    this.fetchAes();
  }

  fetchAes() {
    this.aesthetic.fetchaesthetics().subscribe(
      (data: any) => {
        this.loading = false;
        console.log(data);
        this.aesthetics = data.Aesthetics;
      },
      (error: any) => {
        this.loading = false;
        console.log(error);
        alert('failed to reach endpoint');
      }
    );
  }

  displaymore(event: any) {
    this.called = true;
    this.content = event;
    console.log(event);
  }
  close() {
    this.called = false;
  }

  ngOnInit(): void {}
}
