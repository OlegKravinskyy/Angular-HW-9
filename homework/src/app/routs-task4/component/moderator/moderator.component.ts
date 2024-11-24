import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrl: './moderator.component.css',
})
export class ModeratorComponent implements OnInit {
  userName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userName = params['name'] || 'Any user';
    });
  }
}
