import { ReduxDevtoolsExtension, ReduxDevtoolsExtensionConfig, ReduxDevtoolsExtensionConnection } from '@ngrx/store-devtools/src/extension';
import { RemoteDev } from './remotedev';

export interface RemoteDevToolsProxyOptions {
  realtime?: boolean;
  hostname?: string;
  port?: number;
  autoReconnect?: boolean;
  connectTimeout?: number;
  ackTimeout?: number;
  secure?: boolean;
}

export function createReduxDevtoolsExtension() {
  return new RemoteDevToolsProxy({
    connectTimeout: 300000, // extend for pauses during debugging
    ackTimeout: 120000,  // extend for pauses during debugging
    secure: false, // dev only
  });
}

export class RemoteDevToolsConnectionProxy implements ReduxDevtoolsExtensionConnection {

  constructor(
    private remotedev: RemoteDev,
    private instanceId: string
  ) { }

  public subscribe(listener: (change: any) => void): void {
    this.remotedev.subscribe(listener);
  }

  public unsubscribe(): () => void {
    return () => this.remotedev.unsubscribe();
  }

  public send(action: any, state: any): void {
    this.remotedev.send(action, state);
  }

  public init(state?: any): void {
    this.remotedev.init(state);
  }

  public error(any: any): void {
    this.remotedev.error(any);
  }

}

export class RemoteDevToolsProxy implements ReduxDevtoolsExtension {

  private remotedev = null;
  private options: RemoteDevToolsProxyOptions = {};

  constructor(
    private customOptions: RemoteDevToolsProxyOptions
  ) {
    this.options = {
      realtime: true,
      hostname: 'localhost',
      port: 8000,
      autoReconnect: true,
      connectTimeout: 20000,
      ackTimeout: 10000,
      secure: true,
      ...customOptions
    };
  }

  public connect(options: ReduxDevtoolsExtensionConfig): any {
    const connectOptions = { ...this.options, options };

    this.remotedev = RemoteDev.getInstance(connectOptions);
    return new RemoteDevToolsConnectionProxy(this.remotedev, connectOptions.options.instanceId);
  }

  public send(action: any, state: any): void {
    this.remotedev.send(action, state);
  }

}
