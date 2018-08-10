import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface State {
  value?: number;
}

export const initialState: State = {
  value: 0
};

export function reducer(
  state = initialState,
  action: Action
): State {
  switch (action.type) {

    case INCREMENT: {
      return {
        ...state,
        value: state.value + 1
      };
    }

    case DECREMENT: {
      if (state.value === 0) {
        return state;
      }

      return {
        ...state,
        value: state.value - 1
      };
    }

    case RESET: {
      return initialState;
    }

    default:
      return state;
  }
}

export const getFeatureCounterStateSelector = createFeatureSelector<State>('counter');
export const getCounterValueSelector = createSelector(
  getFeatureCounterStateSelector,
  state => state.value
);
