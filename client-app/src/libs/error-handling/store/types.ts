import { Observable } from 'rxjs';

// state type
export interface State {
  errors: ErrorInfo[];
}

export class ErrorInfo {
  public timestamp = new Date();

  constructor(
    public message: string | Event,
    public source?: string,
    public lineNumber?: number,
    public columnNumber?: number,
    public error?: Error){
  }
}

export interface ReactiveErrorInfo extends ErrorInfo {
  timestamp$: Observable<Date>;
}
