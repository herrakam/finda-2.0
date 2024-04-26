export type HandleLoginType = 'google' | 'github';

export type LoginClickEventType = (loginType: HandleLoginType) => void;

export interface LoginBtnType {
  label: HandleLoginType;
  clickEvent: LoginClickEventType;
}
