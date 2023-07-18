import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { rootReducer } from './redux/store';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, RxjsComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(rootReducer)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
