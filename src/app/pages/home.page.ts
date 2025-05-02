import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage {

}
