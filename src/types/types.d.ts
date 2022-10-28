import { RootAction } from './store/actions/root';

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}
