import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products = [
    { id: 1, name: 'Phone Case A', color: 'red' },
    { id: 2, name: 'Phone Case B', color: 'blue' },
    { id: 3, name: 'Phone Case C', color: 'green' },
    { id: 4, name: 'Phone Case D', color: 'red' },
  ];

  filteredProducts = this.products;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const color = params['color'];
      if (color) {
        this.filteredProducts = this.products.filter(
          (product) => product.color === color
        );
      } else {
        this.filteredProducts = this.products;
      }
    });
  }

  onFilter(color: string): void {
    this.router.navigate([], { queryParams: { color } });
  }
}
