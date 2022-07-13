export const getServerPath = (path: string, { addDomain = true, addApiPrefix = true } = {}): string =>
  `${(addDomain && process.env.REACT_APP_SERVER_ENDPOINT) || ''}${
    (addApiPrefix && process.env.API_PREFIX) || '/api/v1'
  }${path}`;
