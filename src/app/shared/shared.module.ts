import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';

import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    NgbDropdownModule,
    NgxValidateCoreModule,

    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
  ],
  providers: []
})
export class SharedModule {}
