import { Component ,OnInit} from '@angular/core';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
availableLanguage:string[]=[];
currentLanguage:string="";
constructor(private translationService: MainService){
  this.availableLanguage=this.translationService.getAvailableLanguages();
  this.currentLanguage=this.translationService.currentlangauge();
}

changeLanguage(lang:string){
  this.translationService.switchLanguage(lang)
}}
