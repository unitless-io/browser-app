export const ENDPOINTS = {
  USER: '/user',
  APPLICATIONS: '/applications',
  FILES: (appId: string) => `/applications/${appId}/files`,
  FUNCTIONS: (fileId: string) => `/file/${fileId}/functions`,
  FUNCTION: (funcId: string) => `/function/${funcId}`,
  CALLS: (funcId: string) => `/function/${funcId}/calls`,
  SIGN_IN: '/auth/google',
  LOG_OUT: '/auth/log-out',
};
