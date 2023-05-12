import { Component, OnInit } from '@angular/core';
import { APIsService } from 'src/app/Services/apis.service';

@Component({
  selector: 'app-unovels',
  templateUrl: './unovels.component.html',
  styleUrls: ['./unovels.component.css'],
})
export class UnovelsComponent implements OnInit {
  loading = true;
  novels: any = [];
  imagepath: any = 'http://jomi.com/Novel/';
  page: number = 1;
  called = false;
  display = true;
  content: any;

  constructor(private novel: APIsService) {
    this.fetchnov();
  }

  fetchnov() {
    this.novel.fetchnovels().subscribe(
      (data: any) => {
        this.loading = false;
        console.log(data);
        this.novels = data.novels;
      },
      (error: any) => {
        this.loading = false;
        console.log(error);
        alert('failed to reach endpoint');
      }
    );
  }
  displaymore(event: any) {
    this.display = false;

    this.called = true;
    this.content = event;
    console.log(event);
  }
  close() {
    this.display = true;

    this.called = false;
  }
  ngOnInit(): void {}
}
