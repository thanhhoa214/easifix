import { Component, OnInit } from '@angular/core';
import { BottomBarService } from '../layout/bottombar.service';

@Component({
  selector: 'app-success-momo',
  templateUrl: './success-momo.component.html',
  styleUrls: ['./success-momo.component.scss'],
})
export class SuccessMomoComponent implements OnInit {
  imgSrc1Hide = true;

  constructor(public bottomBarService: BottomBarService) {
    bottomBarService.hide();
  }

  ngOnInit(): void {}
}
