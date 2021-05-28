import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const modules : any [] =[
  LayoutModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule
  
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Ng2GoogleChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
