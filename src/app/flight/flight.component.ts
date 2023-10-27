import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { FlightDto, FlightService } from '@proxy/flights';
import { FlightDialogComponent } from './components/flight-dialog/flight-dialog.component';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit{

  flight = { items: [], totalCount: 0 } as PagedResultDto<FlightDto>;
  columns: string[] = ['actions','origin', 'destination','departureDate','arrivalDate'];

  constructor(
    public readonly list : ListService,
    private flightService: FlightService,
    public dialog: MatDialog
  ){
    this.list.maxResultCount = 2;
  }

  ngOnInit(): void {
    const flightStreamCreator = (query) => this.flightService.getList(query);
    this.list.hookToQuery(flightStreamCreator).subscribe((response) => {
      this.flight = response;
    });

    
  }

  changePage(pageEvent: PageEvent){
    this.list.page = pageEvent.pageIndex;
  }

  changeSort(sort: Sort) {
    this.list.sortKey = sort.active;
    this.list.sortOrder = sort.direction;
  }

  formatDate(date:string){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(date).toLocaleString("ru-RU");
  }

  createFlight(){
    const dialogRef = this.dialog.open(FlightDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.flightService.create(result).subscribe(() =>{
          this.list.get();
        });
      }
    });
  }

  editFlight(id:number){
    this.flightService.get(id).subscribe((flightObj)=>{
      const dialogRef = this.dialog.open(FlightDialogComponent,{data:flightObj});
      dialogRef.afterClosed().subscribe((result) => {
        if(result){
          this.flightService.update(id,result).subscribe(() =>{
            this.list.get();
          });
        }
      });
    });
  }
  
}
