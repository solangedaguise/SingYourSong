import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() lien!: SafeResourceUrl;
  @Input() lienOnglet! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
