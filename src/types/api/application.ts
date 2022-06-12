export interface Application {
  _id: string;
  token: string;
  mode: 'webpack';
  webpackData: {
    mode: string;
    target: string;
  };
}
