import * as fromCounter from './counter.reducer';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  moduleId: module.id,
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public counter$ = this.store.select(fromCounter.getCounterValueSelector);

  constructor(
    private store: Store<fromCounter.State>
  ) {}

  public increment() {
    this.store.dispatch({ type: fromCounter.INCREMENT });
  }

  public decrement() {
    this.store.dispatch({ type: fromCounter.DECREMENT });
  }

  public reset() {
    this.store.dispatch({ type: fromCounter.RESET });
  }

}

