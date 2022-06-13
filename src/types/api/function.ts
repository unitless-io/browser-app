export enum FunctionType {
  Arrow = 'arrow',
}

export interface Function {
  _id: string;
  fileId: string;
  hashId: string;
  type: FunctionType;
  name: string;
  content: string;
  contentChangedAt: Date | null;
}
