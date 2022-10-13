export enum ROUTES {
  SIGN_IN = '/sign-in',
  PRIVACY_POLICY = '/privacy-policy',
  TERMS = '/terms',
  LOGIN_ERROR = '/login-error',
  HOME = '/',
  APPLICATIONS = '/applications',
  FUNCTION = '/function/:funcId',
  PAYMENTS = '/payments',
}

export const NO_AUTH_ROUTES = new Set<string>([ROUTES.PRIVACY_POLICY, ROUTES.TERMS]);
