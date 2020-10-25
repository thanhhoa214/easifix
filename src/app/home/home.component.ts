import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor() {}
  nearbys: { src: string; title: string; fixer: string; price: string }[] = [
    {
      src: '047-washing machine.svg',
      title: 'Sửa máy giặt',
      fixer: 'Phạm Mạnh Long',
      price: '100.000đ',
    },
    {
      src: '002-air-conditioner.svg',
      title: 'Sửa máy lạnh',
      fixer: 'Trần Đạt',
      price: '250.000đ',
    },
    {
      src: '019-microwave.svg',
      title: 'Sửa lò vi sóng',
      fixer: 'Lê Văn Tân',
      price: '150.000đ',
    },
  ];
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
      src: '047-washing machine.svg',
      badge: 'giảm 50%',
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
      badge: '',
    },
    {
      src: '010-fridge.svg',
      badge: 'giảm 20%',
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
