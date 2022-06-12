export const ENDPOINTS = {
  USER: '/user',
  APPLICATIONS: '/applications',
  FILES: (appId: string) => `/applications/${appId}/files`,
  SIGN_IN: '/auth/google',
  LOG_OUT: '/auth/log-out',
};
