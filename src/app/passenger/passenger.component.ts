import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { PassengerDto, PassengerService } from '@proxy/passengers';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit{
  passenger = { items: [], totalCount: 0 } as PagedResultDto<PassengerDto>;
  columns: string[] = ["firstName","lastName"]; 

  constructor(
    public readonly list: ListService,
    private passengerService: PassengerService
  ){
    this.list.maxResultCount = 2;
  }


  ngOnInit(): void {
    const passengerStreamCreator = (query) => this.passengerService.getList(query);
    this.list.hookToQuery(passengerStreamCreator).subscribe((response) => {
      this.passenger = response;
    });
  }

  changePage(pageEvent: PageEvent) {
    this.list.page = pageEvent.pageIndex;
  }

  changeSort(sort: Sort) {
    this.list.sortKey = sort.active;
    this.list.sortOrder = sort.direction;
  }

}
