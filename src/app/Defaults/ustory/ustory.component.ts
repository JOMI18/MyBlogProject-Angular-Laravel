import { Component, OnInit } from '@angular/core';
import { APIsService } from 'src/app/Services/apis.service';

@Component({
  selector: 'app-ustory',
  templateUrl: './ustory.component.html',
  styleUrls: ['./ustory.component.css'],
})
export class UstoryComponent implements OnInit {
  loading = true;
  display = true;
  story: any = [];
  imagepath: any = 'http://jomi.com/Story/';
  page: number = 1;
  called = false;
  content: any;

  constructor(private stories: APIsService) {
    this.fetchStrory();
  }

  fetchStrory() {
    this.stories.fetchstories().subscribe(
      (data: any) => {
        this.loading = false;
        console.log(data);
        this.story = data.story;
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
    this.called = false;
    this.display = true;
  }

  ngOnInit(): void {}
}
