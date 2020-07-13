import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  videoSource: any;
  title = 'videotabs';
  showVideos = false;
  idx: number;

  listVideos: any[] = [
    { name: 'coaster', url: 'https://www.youtube.com/embed/OPdbdjctx2I?rel=0;&autoplay=1&mute=1&loop=1&playlist=OPdbdjctx2I' },
    { name: 'professor', url: 'https://www.youtube.com/embed/9KhJO4UloIE?rel=0;&autoplay=1&mute=1&loop=1&playlist=9KhJO4UloIE' },
    { name: 'dunk', url: 'https://www.youtube.com/embed/1jil38FcTTY?rel=0;&autoplay=1&mute=1&loop=1&playlist=1jil38FcTTY' },
    { name: 'giant', url: 'https://www.youtube.com/embed/0Hkef4IQvoM?rel=0;&autoplay=1&mute=1&loop=1&playlist=0Hkef4IQvoM' }
  ];

  //https://www.youtube.com/embed/INSERTCODErel=0;&autoplay=1&mute=1&loop=1&playlist=INSERTCODE

  @ViewChild('video', {static: false}) videoref: ElementRef;

  ngOnInit() {}

  mouseOver(index: any, event: any) {
    this.videoref.nativeElement.show;
    this.showVideos = true;
    this.idx = index;
    return this.idx;
  }

  mouseLeave(event: any) {
    this.videoref.nativeElement.hide;
    this.showVideos = false;
  }
}
