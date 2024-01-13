import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../shared/services/page-title.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  pageTitle = "Product"

  constructor(private shareTitle: PageTitleService) {}

  ngOnInit(): void {
    this.sendDataToSidebar()
  }

  sendDataToSidebar(): void {
    this.shareTitle.setSharedTitle(this.pageTitle);
  }
}
