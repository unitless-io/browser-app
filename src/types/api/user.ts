export interface User {
  googleId?: string;
  google?: {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
    accessToken: string;
    refreshToken: string;
  };
  gitHubId?: string;
  gitHub?: {};

  appToken: string | null;
}
