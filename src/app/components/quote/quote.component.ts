import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Welcome and enjoy the quotes';
  quotes: Quote[] = [
    new Quote (1, "Moses", "Life", "")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
