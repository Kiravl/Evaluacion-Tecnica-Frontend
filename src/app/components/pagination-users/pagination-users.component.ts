import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-users',
  templateUrl: './pagination-users.component.html',
  styleUrls: ['./pagination-users.component.css']
})
export class PaginationUsersComponent implements OnInit {

  @Input() list_pages: number[];
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  currentPage: number = 1; 

  constructor() { }

  ngOnInit() {
  }

  goTo($event: MouseEvent, page: number) {
    this.currentPage = page;
    this.onPageChange.emit(page);
    $event.preventDefault();
  }

  goToExtreme($event: MouseEvent, final: boolean) {
    this.currentPage = this.currentPage + (final ? 1 : -1);
    if (this.currentPage <= 0) this.currentPage = 1;
    if ( this.currentPage > this.list_pages.length) this.currentPage = this.list_pages.length;
    this.onPageChange.emit(this.currentPage);
    $event.preventDefault();
  }

}