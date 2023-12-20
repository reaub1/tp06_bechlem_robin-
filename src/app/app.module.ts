import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { PanierState } from '../shared/states/panier-state';
import { CatalogueModule } from './catalogue/catalogue.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot([PanierState]),
    CatalogueModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
