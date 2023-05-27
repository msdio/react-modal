export type DefaultModalName = "clear" | "unknown";

export type ModalRemovedName = DefaultModalName | string | string[];

export interface ModalTransition {
  transitionProperty: string;
  transitionDuration: string;
  transitionTimingFunction: string;
  transitionDelay: string;
}

export type ModalTransitionProps = {
  [key in keyof ModalTransition]?: ModalTransition[key];
}

export type DefaultModalPosition = "center" | "bottom" | "top" | "left" | "right" | "default" | "leftCenterRight" | "rightCenterLeft";

export interface PositionStyle {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  transform?: string;
  opacity?: number;
}

export interface ModalPositionStyle {
  initial: PositionStyle;
  active: PositionStyle;
  final: PositionStyle;
}

export type ModalPositionTable<T extends string = string> = {
  [key in (DefaultModalPosition | T)]: ModalPositionStyle;
}

export type ModalPositionMap<T extends string = string> = Map<T | DefaultModalPosition, ModalPositionStyle>;


export type ModalTransitionOptions = Omit<ModalTransitionProps, "transitionDuration">;

export interface ModalManagerOptionsProps<T extends string> {
  position?: ModalPositionTable<T>;
  transition?: ModalTransitionOptions;
  duration?: number;
}

export interface ModalDispatchOptions<T extends string = string> {
  confirmModalCallback?: (props?: any) => void;
  cancelModalCallback?: (props?: any) => void;
  subModalCallback?: (props?: any) => void;
  essentialCallback?: (props?: any) => void;
  confirmModalCallbackProps?: any;
  cancelModalCallbackProps?: any;
  subModalCallbackProps?: any;
  essentialCallbackProps?: any;
  coverCallbackType?: "confirm" | "cancel" | "sub" | "none" | "block";
  coverColor?: string;
  coverOpacity?: number;
  title?: React.ReactNode | React.ReactElement;
  content?: React.ReactNode | React.ReactElement;
  confirmContent?: React.ReactNode | React.ReactElement;
  cancelContent?: React.ReactNode | React.ReactElement;
  subContent?: React.ReactNode | React.ReactElement;
  payload?: any;
  duration?: number;
  transitionOptions?: ModalTransitionOptions;
  position?: ((breakPoint: number) => DefaultModalPosition | T) | DefaultModalPosition | T;
  required?: boolean;
}

export type ModalCallbackType = (
  payload?: any
) => void | undefined | ModalRemovedName | string;

export interface EditModalOptionsProps<T extends string = string> extends ModalDispatchOptions<T> {
  isClose?: boolean;
}

export interface ModalOptions<T extends string = string> extends EditModalOptionsProps<T> {
  closeModal: (callback?: ModalCallbackType, props?: any) => void;
}

export type CloseModalProps =
  | ModalRemovedName
  | number
  | [number, ModalRemovedName];

export type CloseModal = (closeModalProps: CloseModalProps) => void;

export type ModalComponent = React.FC<ModalOptions>;

export interface ModalComponentFiber<T extends string = string> {
  name: string;
  component: ModalComponent;
  defaultOptions?: ModalDispatchOptions<T>;
}

export interface ModalFiber<T extends ModalDispatchOptions = ModalOptions> {
  id: number;
  name: string;
  component: ModalComponent;
  options: T;
}

export type ModalListener = (
  modalFiberStack: ModalFiber<ModalOptions>[]
) => void;
