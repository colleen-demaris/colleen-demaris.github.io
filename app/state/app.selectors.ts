import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromApp from './app.reducer';
import * as fromRouter from '@ngrx/router-store';

  
export const getRouterState = createFeatureSelector<any>('router');

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(getRouterState);

export const getActiveRoute = createSelector(selectUrl, selectQueryParams, (url, queryParams) => {
  return { url, queryParams };
});


export const getAppState = createFeatureSelector<fromApp.State>('app');

export const getUiInput = createSelector(getAppState, (state: fromApp.State) => state.uiInput);

