import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-conteudo1',
  templateUrl: './conteudo1.component.html',
  styleUrls: ['./conteudo1.component.css']
})
export class Conteudo1Component {

  constructor(private sanitizer: DomSanitizer) { }

  getImageUrl() {
    const imagePath = 'assets/estudo.jpg';
    return this.sanitizer.bypassSecurityTrustStyle(`url(${imagePath})`);
  }
}
