import * as fromCounter from '~/counter.reducer';
import { AppComponent } from '~/app.component';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { NativeScriptDevNgrxRemoteDevtoolModule } from 'nativescript-dev-ngrx-remote-devtool';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    StoreModule.forRoot({ counter: fromCounter.reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    NativeScriptDevNgrxRemoteDevtoolModule.forRoot()
  ],
  declarations: [
    AppComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
