import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-stories',
  templateUrl: './default-stories.component.html',
  styleUrls: ['./default-stories.component.css'],
})
export class DefaultStoriesComponent implements OnInit {
  calledMv = false;
  calledMs = false;
  calledN = false;
  calledA = false;
  calledS = false;
  contentMv: any;
  contentMs: any;
  contentA: any;
  contentN: any;
  contentS: any;

  MovieArr = [
    {
      id: 2,
      Title: 'Black Adam',
      Trailer:
        '../../../assets/Images/MOVIES/Videos/y2mate.com - Black Adam.mp4',
      Image: '../../../assets/Images/MOVIES/Images/badam.jpg',
      ReleaseDate: '21 October 2022',
      Ratings: '6.4/10',
      Description:
        'After being bestowed with godly powers and imprisoned for it, Black Adam is liberated from his earthly binds to unleash his fury on the modern world.',
    },
  ];
  NovelArr = [
    {
      id: 3,
      Title: 'After',
      Image: '../../../assets/Images/aft.jpg',
      ReleaseDate: '21 October 2014',
      Ratings: '4.9/5',
      Author: 'Anna Todd',
      Description:
        "Tessa is a good girl with a sweet, reliable boyfriend back home. She's got direction, ambition, and a mother who's intent on keeping her that way. But she's barely moved into her freshman dorm when she runs into Hardin. With his tousled brown hair, cocky British accent, tattoos, and lip ring, Hardin is cute and different from what she's used to...",
    },

    {
      id: 4,
      Title: 'Twilight',
      Author: 'Stephenie Meyer',
      Image: '../../../assets/Images/twilight.jpg',
      ReleaseDate: 'October 5, 2005',
      Ratings: '3.64/5',
      Description:
        "About three things I was absolutely positive. First, Edward was a vampire.Second, there was a part of him—and I didn't know how dominant that part might be—that thirsted for my blood...",
    },
  ];
  StoryArr = [
    {
      id: 6,
      Name: 'Oluwaferanmi Odedairo',
      Image: '../../../assets/Images/Feran.JPG',
      Age: '20 years',
      Nationality: 'Nigerian',
      Story:
        'Lorem ipsum dolor sit amet consectetur,ditiis assumenda ipsum quia consequuntur impedit quos laboreVeniam, dolor sed vel praesentium nesciunt accusamus facere. Reprehenderit, beatae quibusdam',
    },
  ];
  MusicArr = [
    {
      id: 7,
      Title: 'Beat the Odds',
      Image: '../../../assets/Images/MUSIC/Lil-Tjay.webp',
      Artist: 'Lil Tjay',
      ReleaseDate: 'August 26, 2022',
      Audio:
        '../../../assets/Audios/Lil_Tjay_Beat_the_Odds_(thinkNews.com.ng).mp3',
    },
  ];
  AesArr = [
    {
      id: 9,
      Category: 'Home',
      Image: '../../../assets/Images/AESTHETICS/Home.jpg',
      Description: '...Go crazy with your home design',
    },

    {
      id: 9,
      Category: 'Outfits',
      Image: '../../../assets/Images/AESTHETICS/outfits3.jpg',
      Description: '...Believe me, I know!',
    },
    {
      id: 9,
      Category: 'Nature',
      Image: '../../../assets/Images/proaesthetics.jpg',
      Description: '...Sync with nature',
    },
  ];

  displaymoreMv(event: any) {
    this.calledMv = true;
    this.calledMs = false;
    this.calledN = false;
    this.calledA = false;
    this.calledS = false;
    this.contentMv = event;
    console.log(event);
  }
  displaymoreMs(event: any) {
    this.calledMs = true;
    this.calledMv = false;

    this.calledN = false;
    this.calledA = false;
    this.calledS = false;
    this.contentMs = event;
    console.log(event);
  }
  displaymoreA(event: any) {
    this.calledA = true;
    this.calledMs = false;
    this.calledMv = false;
    this.calledN = false;

    this.calledS = false;
    this.contentA = event;
    console.log(event);
  }
  displaymoreN(event: any) {
    this.calledN = true;
    this.calledA = false;
    this.calledMs = false;
    this.calledMv = false;
    this.calledS = false;
    this.contentN = event;
    console.log(event);
  }
  displaymoreS(event: any) {
    this.calledS = true;
    this.calledA = false;
    this.calledMs = false;
    this.calledMv = false;
    this.calledN = false;
    this.contentS = event;
    console.log(event);
  }
  closeA() {
    this.calledA = false;
  }
  closeN() {
    this.calledN = false;
    this.calledA = false;
  }
  closeS() {
    this.calledS = false;
  }
  closeMs() {
    this.calledMs = false;
  }
  closeMv() {
    this.calledMv = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
