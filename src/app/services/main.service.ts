import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private translateService: TranslateService) { 
    this.translateService.addLangs(['en','fr']);
    this.translateService.setDefaultLang('en')
  }

  switchLanguage(lang:string){
    this.translateService.use(lang)
  }
  getAvailableLanguages(): string[] {
    return ['en', 'fr']; // Add more languages as needed
  }
  currentlangauge():string{
    return this.translateService.currentLang;
  }
}
