import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit, inject } from '@angular/core';
import { AirportDto, AirportService } from '@proxy/airports';
import{ PageEvent } from "@angular/material/paginator";
import{ Sort } from "@angular/material/sort";

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit{
  airport = { items: [], totalCount: 0 } as PagedResultDto<AirportDto>;
  columns: string[] = ["city", "code" ];

  constructor(
    public readonly list: ListService,
    private airportService: AirportService
  ){
    this.list.maxResultCount = 2;
  }

  ngOnInit(): void {
    const airportStreamCreator = (query) => this.airportService.getList(query);

    this.list.hookToQuery(airportStreamCreator).subscribe((response) => {
      this.airport = response;
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
