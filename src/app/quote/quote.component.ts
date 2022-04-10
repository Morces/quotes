import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Welcome and enjoy the quotes';
  quotes: Quote[] = [
    new Quote (1, "Moses", "Life", "You will face many defeats in life, but never let yourself be defeated.", "MAYA ANGELOU", new Date(2020,5,3),0,0),
    new Quote (2, "Harmony", "Technology", "Any suffiently advanced technology is indistinguishable from magic.", "ARTHUR C. CLARKE", new Date(2021,7,7),0,0),
    new Quote (3, "Victor", "Religion", "When I do good, I feel good. When I do bad, I feel bad. That's my religion","ABRAHAM LINCOLN", new Date(2019,3,9),0,0),
    new Quote (4, "Sammy", "Tech and Life", "Technology by itself doesn't make leaders. Technology only amplifies leadership.", "STEVE JOBS", new Date(2022,10,5),0,0),
    new Quote (5, "Reagan", "Trust", "Loving someone is giving them the power to break your heart, but trusting them not to.", "JULIANNE MOORE", new Date(2018,5,7),0,0),
    new Quote (6, "Margaret", "Peace of Mind", "Your peace of mind has to do with what you focus on. It has nothing to do with life. Empower yourself.", "ROBIN LEE", new Date(2022,2,1),0,0),
  ];
  // quotes: any;
  // get sortQuotes():any{
  //   return this.sortQuotes.sort((a: { datePosted: string | number | Date; }, b: { datePosted: string | number | Date; }) => {
  //     return <any>new Date (b.datePosted) - <any>new Date(a.datePosted);
  //   });
  // }
  addQuote(quote:any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completedate)
    this.quotes.push(quote);
  }
  deleteQuote(hasRead: any, index: any) {
    if (hasRead) {
      let toDelete = confirm("Click OK to delete this Quote");
      if (toDelete) {
        this.quotes.splice(index,1);
      }
    }
  }
  displayInfo(index: any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  constructor() { }

  ngOnInit() {
  }

}
