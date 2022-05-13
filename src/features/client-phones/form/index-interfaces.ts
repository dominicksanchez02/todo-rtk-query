import { PhoneItemProps } from '../index-interfaces';
export interface InputProps {
  name: string;
  clientPhone: string;
  rcpid?: any;
}

export interface FormProps {
  onSubmit(data: InputProps): void;
  phone?: PhoneItemProps;
}