import { ILink } from "./ILink";

export interface IToast {
  toastId?: string;
  toastStatus?: any;
  toastTitle?: string;
  toastDescription?: string;
  toastLink?: ILink;
}
