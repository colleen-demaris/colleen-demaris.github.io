import { createReducer, on } from '@ngrx/store';

import * as AppActions from './app.actions';

export interface State {
  uiInput: {
      value: any;
  };
}

const initialState: State = {
  uiInput: {
      value: '',
  },
};

export const reducer = createReducer(
  initialState,
  on(AppActions.updateUiInput, (state: State, changes) => ({ ...state, uiInput: { ...state.uiInput, ...changes.param }})),
);
