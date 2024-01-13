import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, SidebarComponent, RouterOutlet],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  title: string = '';
  constructor(private shareTitle: PageTitleService, private cdr : ChangeDetectorRef) {}

  ngOnInit(): void {
    this.shareTitle.sharedData$.subscribe((data) => {
      this.title = data;
      this.cdr.detectChanges()
    });
  }
}
