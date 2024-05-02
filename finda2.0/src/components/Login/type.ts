import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

export type HandleLoginType = 'google' | 'github';

export type LoginClickEventType = (loginType: HandleLoginType) => void;

export interface LoginBtnType {
  label: HandleLoginType;
  clickEvent: LoginClickEventType;
  icon: JSX.Element;
}

export type ProviderType = GoogleAuthProvider | GithubAuthProvider;
