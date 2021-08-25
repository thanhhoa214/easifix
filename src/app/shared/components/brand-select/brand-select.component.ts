import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import {
  Plugins,
  CameraResultType,
  CameraSource,
  Capacitor,
} from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const { Camera } = Plugins;

@Component({
  selector: 'app-brand-select',
  templateUrl: './brand-select.component.html',
  styleUrls: ['./brand-select.component.scss'],
})
export class BrandSelectComponent {
  search = new FormControl();
  photo: SafeResourceUrl;
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<
    HTMLInputElement
  >;
  brandSearch = new FormControl();

  constructor(
    private dataService: DataService,
    private router: Router,
    private modalController: ModalController,
    private sanitizer: DomSanitizer,
    private changeDetector: ChangeDetectorRef
  ) {}

  getPredictions() {
    const q = this.search.value;
    if (!q) return this.dataService.getPredictions();
    return this.dataService
      .getPredictions()
      .filter(
        (item) => item.includes(this.search.value) && item !== this.search.value
      );
  }

  setSearchValue(value: string) {
    this.search.setValue(value);
  }

  goToSearch() {
    this.dataService.writeBrand(this.search.value);
    this.router.navigateByUrl('/home/booking');
    this.modalController.dismiss();
  }
  async getPicture() {
    if (!Capacitor.isPluginAvailable('Camera')) {
      this.filePickerRef.nativeElement.click();
      return;
    }

    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
    });

    this.dataService.imageDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
    this.photo = this.dataService.imageDataUrl;
    this.changeDetector.detectChanges();
    console.log(this.dataService.imageDataUrl);
  }
}
