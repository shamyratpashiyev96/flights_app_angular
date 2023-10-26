import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { PassengerDto, PassengerService } from '@proxy/passengers';
import { PassengerDialogComponent } from './components/passenger-dialog/passenger-dialog.component';
import { ConfirmationDialogComponent } from '../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit{
  passenger = { items: [], totalCount: 0 } as PagedResultDto<PassengerDto>;
  columns: string[] = ['actions',"firstName","lastName"]; 

  constructor(
    public readonly list: ListService,
    private passengerService: PassengerService,
    public dialog: MatDialog
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

  createPassenger() {
    const dialogRef = this.dialog.open(PassengerDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.passengerService.create(result).subscribe(() => {
          this.list.get();
        });
      }
    });
  }

  editPassenger(id: number) : void{
    this.passengerService.get(id).subscribe((passengerObj)=> {

      const dialogRef = this.dialog.open(PassengerDialogComponent, { data: passengerObj });
      dialogRef.afterClosed().subscribe((result) => {

        if(result){
          this.passengerService.update(id,result).subscribe(()=>{
            this.list.get();
          });
        }

      });
    });

  }

  deletePassenger(id: number) {
    const confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data: {
        title: "::AreYouSure",
        description: "::AreYouSureToDelete"
      }
    });

    confirmationDialogRef.afterClosed().subscribe((confirmationResult)=>{
      if(confirmationResult){
        this.passengerService.delete(id).subscribe(()=>this.list.get());
      }
    });
  }
}
