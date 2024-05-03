import Dimmed from '../Dimmed/Index';
import { ModalProps } from './type';

function Modal({ children }: ModalProps) {
  return <Dimmed>{children}</Dimmed>;
}

export default Modal;
