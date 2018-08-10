import { ModuleWithProviders, NgModule } from '@angular/core';
import { ɵngrx_modules_store_devtools_store_devtools_j as REDUX_DEVTOOLS_EXTENSION, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { REMOTE_DEVTOOLS_PROXY_OPTIONS, RemoteDevToolsProxy } from './remotedev/proxy';
import { RemoteDevToolsProxyOptions } from './remotedev/model';

@NgModule({
  imports: [
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  exports: [
    StoreDevtoolsModule
  ]
})
export class NativeScriptDevNgrxRemoteDevtoolModule {

  public static forRoot(options: RemoteDevToolsProxyOptions = {}): ModuleWithProviders {
    return {
      ngModule: NativeScriptDevNgrxRemoteDevtoolModule,
      providers: [
        {
          provide: REMOTE_DEVTOOLS_PROXY_OPTIONS,
          useValue: options
        },
        {
          provide: REDUX_DEVTOOLS_EXTENSION,
          useClass: RemoteDevToolsProxy,
        }
      ]
    };
  }

}
