import Manager from "./services/modalManager";
import setController from "./utils/setModalController";
import setRegistrator from "./components/ModalRegistrator";
import setDispatcher from "./components/ModalDispatcher";
import setUseIsOpen from "./hooks/useIsOpenModal";
import {
  ModalOptions as Options,
  ModalCallbackType as CallbackType,
  ModalComponent as Component,
  ModalComponentFiber as ComponentFiber,
} from "./entities/types";

export const ModalManager = Manager;
export const setModalController = setController;
export const setModalDispatcher = setDispatcher;
export const setModalRegistrator = setRegistrator;
export const setUseIsOpenModal = setUseIsOpen;

export const defaultModalManager = new Manager();
export const modalController = setController(defaultModalManager);
export const ModalDispatcher = setDispatcher(defaultModalManager);
export const ModalRegistrator = setRegistrator(defaultModalManager);
export const useIsOpenModal = setUseIsOpen(defaultModalManager);

export type ModalOptions = Options;
export type ModalCallbackType = CallbackType;
export type ModalComponent = Component;
export type ModalComponentMeta = ComponentFiber;