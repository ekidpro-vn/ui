import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ModalProps } from './modal.types';
import { getModalSize } from './modal.size';
import clsx from 'clsx';

export function Modal(props: ModalProps) {
  const { show, onClose, preventClickOutsideToClose, title, center, size, zIndex } = props;
  const modalSize = getModalSize(size);
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto"
        style={{ zIndex: zIndex ?? 20 }}
        onClose={
          preventClickOutsideToClose
            ? () => {
                // do nothing
              }
            : onClose
        }
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={clsx(
                modalSize,
                { 'align-top': !center },
                'inline-block w-full p-6 my-8 overflow-visible text-left transition-all transform bg-white shadow-xl rounded-xl'
              )}
            >
              {title && (
                <div className="flex justify-between items-center">
                  <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-gray-900">
                    {title}
                  </Dialog.Title>
                  <button
                    type="button"
                    className="inline-flex justify-center text-sm font-medium text-blue-900  border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={onClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover:text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
              {props.children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
