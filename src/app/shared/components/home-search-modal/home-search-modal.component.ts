import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { Category } from 'src/app/data.model';
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
  selector: 'app-home-search-modal',
  templateUrl: './home-search-modal.component.html',
  styleUrls: ['./home-search-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSearchModalComponent {
  @Input() searchQuery = '';
  @Input() selectedUserId = '1';
  @Input() selectedCategory = '2';
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<
    HTMLInputElement
  >;

  photo: SafeResourceUrl;
  isDesktop: boolean;
  search = new FormControl();
  brandSearch = new FormControl();
  category: Category;

  constructor(
    private dataService: DataService,
    private router: Router,
    private modalController: ModalController,
    private platform: Platform,
    private sanitizer: DomSanitizer,
    private changeDetector: ChangeDetectorRef
  ) {
    this.category = this.dataService.getCategory(
      this.selectedUserId,
      this.selectedCategory
    );
    if (
      (this.platform.is('mobile') && this.platform.is('hybrid')) ||
      this.platform.is('desktop')
    ) {
      this.isDesktop = true;
    }
  }

  getBrandPredictions() {
    const q = this.brandSearch.value;
    if (!q) return this.dataService.getPredictions();
    return this.dataService
      .getPredictions()
      .filter((item) => item.includes(q) && item !== q);
  }

  getPredictions() {
    const q = this.search.value;
    if (!q) return this.dataService.getRequests();
    return this.dataService
      .getRequests()
      .filter((item) => item.includes(q) && item !== q);
  }

  setSearchValue(value: string) {
    this.search.setValue(value);
  }
  setBrandSearchValue(value: string) {
    this.brandSearch.setValue(value);
  }

  goToSearch() {
    this.dataService.writeBrand(this.brandSearch.value);
    const queryParams = this.category.name + ' ' + this.search.value ?? '';
    this.router.navigateByUrl('/search?q=' + queryParams);
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
