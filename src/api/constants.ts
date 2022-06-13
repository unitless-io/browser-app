export const ENDPOINTS = {
  USER: '/user',
  APPLICATIONS: '/applications',
  FILES: (appId: string) => `/applications/${appId}/files`,
  FUNCTIONS: (appId: string, fileId: string) => `/applications/${appId}/files/${fileId}/functions`,
  SIGN_IN: '/auth/google',
  LOG_OUT: '/auth/log-out',
};
