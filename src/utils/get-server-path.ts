export const getServerPath = (path: string): string =>
  `${process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''}/api/v1${path}`;
