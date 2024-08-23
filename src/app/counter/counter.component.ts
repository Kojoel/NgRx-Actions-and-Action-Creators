import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../states/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$: Observable<number> | undefined;

  constructor(private store: Store<AppState>){
    this.count$ = this.store.select(selectCount)
  }
}
