import { createReduxDevtoolsExtension } from './src/remotedev/proxy';
import { NgModule } from '@angular/core';
import { ɵj as REDUX_DEVTOOLS_EXTENSION } from '@ngrx/store-devtools';


@NgModule({
  providers: [
    {
      provide: REDUX_DEVTOOLS_EXTENSION,
      useFactory: createReduxDevtoolsExtension
    }
  ]
})
export class HmxReduxDevtoolModule {}
