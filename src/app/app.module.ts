import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { DateCountPipe } from './pipe/date-count.pipe';
import { QuotesFormComponent } from './components/quotes-form/quotes-form.component';
import { HighlightQuoteDirective } from './components/directives/highlight-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    DateCountPipe,
    QuotesFormComponent,
    HighlightQuoteDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
