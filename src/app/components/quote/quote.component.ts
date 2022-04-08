import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Welcome and enjoy the quotes';
  quote: Quotes[] = [
    new Quotes (1, "Moses", "Life", "You will face many defeats in life, but never let yourself be defeated.", "MAYA ANGELOU", new Date(2020,5,3),0,0),
    new Quotes (2, "Harmony", "Technology", "Any suffiently advanced technology is indistinguishable from magic.", "ARTHUR C. CLARKE", new Date(2021,7,7),0,0),
    new Quotes (3, "Victor", "Religion", "When I do good, I feel good. When I do bad, I feel bad. That's my religion","ABRAHAM LINCOLN", new Date(2019,3,9),0,0),
    new Quotes (4, "Sammy", "Tech and Life", "Technology by itself doesn't make leaders. Technology only amplifies leadership.", "STEVE JOBS", new Date(2022,10,5),0,0),
    new Quotes (5, "Reagan", "Trust", "Loving someone is giving them the power to break your heart, but trusting them not to.", "JULIANNE MOORE", new Date(2018,5,7),0,0),
    new Quotes (6, "Margaret", "Peace of Mind", "Your peace of mind has to do with what you focus on. It has nothing to do with life. Empower yourself.", "ROBIN LEE", new Date(2022,2,1),0,0),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
