import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorPipe } from './pipes/theme-color.pipe';
import { NbSpinnerModule, NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { WithQueryParamsPipe } from './pipes/with-query-params.pipe';
import { UiValueUpdateDirective } from './directives/ui-value-update.pipe';
import { ToDatePipe } from './pipes/to-date.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ThemeColorPipe, WithQueryParamsPipe, UiValueUpdateDirective, ToDatePipe],
  imports: [
    CommonModule,
    NbSpinnerModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    FormsModule
  ],
  exports: [ThemeColorPipe, NbSpinnerModule, WithQueryParamsPipe, NbButtonModule, NbIconModule, UiValueUpdateDirective, ToDatePipe, NbInputModule, FormsModule]
})
export class SharedModule { }
