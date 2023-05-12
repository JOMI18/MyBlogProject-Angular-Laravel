import { Component, OnInit } from '@angular/core';
import { APIsService } from 'src/app/Services/apis.service';

@Component({
  selector: 'app-umusic',
  templateUrl: './umusic.component.html',
  styleUrls: ['./umusic.component.css'],
})
export class UmusicComponent implements OnInit {
  loading = true;
  musicc: any = [];
  imagepath: any = 'http://jomi.com/Music/Image/';
  vimagepath: any = 'http://jomi.com/Music/Vfile/';
  trimagepath: any = 'http://jomi.com/Music/Trifile/';
  audiopath: any = 'http://jomi.com/Music/Track/';
  page: number = 1;
  called = false;
  content: any;
  display = true;

  constructor(private music: APIsService) {}

  ngOnInit(): void {
    this.fetchMus();
  }

  fetchMus() {
    this.music.fetchmusic().subscribe(
      (data: any) => {
        this.loading = false;
        console.log(data);

        this.musicc = data.music;
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
}
