export enum FunctionType {
  Arrow = 'arrow',
}

export interface Function {
  name: string;
  type: FunctionType;
  contentChangedAt: string;
}
