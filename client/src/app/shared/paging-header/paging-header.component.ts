import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrl: './paging-header.component.scss'
})
export class PagingHeaderComponent {
  @Input() pageNumber?: number;
  @Input() pageSize?: number;
  @Input() totalCount?: number;
  /* @Input()
  set totalCount(val: number | undefined) {
    this._totalCount = val;
    console.log('Total Count in PagingHeaderComponent:', this._totalCount);
  }
  get totalCount(): number | undefined {
    return this._totalCount;
  }
  private _totalCount?: number; */


}
