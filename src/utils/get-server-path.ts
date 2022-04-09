export const getServerPath = (path: string, { addDomain = true, addApiPrefix = true } = {}): string =>
  `${(addDomain && process.env.SERVER_ENDPOINT) || 'http://localhost:4000'}${
    (addApiPrefix && process.env.API_PREFIX) || '/api/v1'
  }${path}`;
