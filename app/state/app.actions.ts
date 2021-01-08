import { createAction, props } from '@ngrx/store';

export const updateUiInput = createAction('[app] Update Ui Input', props<{
  param: {
    value?: any,
  }}>());
