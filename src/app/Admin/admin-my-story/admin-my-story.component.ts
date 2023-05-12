import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminPostsService } from 'src/app/Services/admin-posts.service';

@Component({
  selector: 'app-admin-my-story',
  templateUrl: './admin-my-story.component.html',
  styleUrls: ['./admin-my-story.component.css'],
})
export class AdminMyStoryComponent implements OnInit {
  story: any;
  submitted = false;
  files: any;

  constructor(
    private storyA: FormBuilder,
    private services: AdminPostsService
  ) {}

  createStory() {
    this.story = this.storyA.group({
      title: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      career: ['', [Validators.required]],
      project: ['', [Validators.required]],
      description: ['', [Validators.required]],
      ig: ['', [Validators.required]],
      file: ['', [Validators.required]],
      age: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.createStory();
  }

  get f() {
    // console.log(this.movie.controls);
    return this.story.controls;
  }

  uploadFile(e: any) {
    this.files = e.target.files[0];
    console.log(this.files);
  }

  submitS() {
    this.submitted = true;
    if (this.story.invalid) {
      return;
    }
    // console.log(this.story.value);

    let forms = new FormData();
    forms.append('image', this.files, this.files.name);
    forms.append('title', this.story.get('title').value);
    forms.append('career', this.story.get('career').value);
    forms.append('project', this.story.get('project').value);
    forms.append('ig', this.story.get('ig').value);
    forms.append('dob', this.story.get('dob').value);
    forms.append('nationality', this.story.get('nationality').value);
    forms.append('description', this.story.get('description').value);
    forms.append('age', this.story.get('age').value);

    // console.log(forms.get('ImageUrl'));
    // return;

    return this.services.mystoryDetails(forms).subscribe(
      (data) => {
        console.log(data);
        this.submitted = false;
      },
      (error) => {
        // alert('check your credentials');
        console.log(error.message);

        this.submitted = false;
      }
    );
  }
}
