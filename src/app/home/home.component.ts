import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor() {}
  categories: { src: string; badge: string }[] = [
    {
      src: '002-air-conditioner.svg',
      badge: '',
    },
    {
      src: '006-cleaner.svg',
      badge: '',
    },
    {
      src: '010-fridge.svg',
      badge: 'Hot',
    },
    {
      src: '045-television.svg',
      badge: '',
    },
    {
      src: '017-lamp.svg',
      badge: '',
    },
    {
      src: '019-microwave.svg',
      badge: '',
    },
    {
      src: '024-oven.svg',
      badge: 'Discount',
    },
    {
      src: '039-speaker.svg',
      badge: '',
    },
    {
      src: '043-toaster.svg',
      badge: '',
    },
  ];
  ngOnInit(): void {}
  afterslidesLoad(slides) {
    slides.startAutoplay();
  }
}
