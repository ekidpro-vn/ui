import { Meta, Story } from '@storybook/react';
import React, { ComponentProps, useState } from 'react';
import { Modal } from './modal';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

const ModalComponent: Story<ComponentProps<typeof Modal>> = (args: any) => {
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const btnClassName =
    'py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg';

  return (
    <>
      <button type="button" onClick={() => setShow(true)} className={btnClassName}>
        Click to open modal
      </button>
      <Modal {...args} show={show} onClose={onClose}>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent your an email with all of the details of your
            order.
          </p>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={onClose}
          >
            Got it, thanks!
          </button>
        </div>
      </Modal>
    </>
  );
};

export const DefaultModal = ModalComponent.bind({});
DefaultModal.storyName = 'Default modal';
DefaultModal.args = { title: 'Just an example for modal' };

export const PreventClickOutside = DefaultModal.bind({});
PreventClickOutside.storyName = 'Prevent click outside to close modal';
PreventClickOutside.args = {
  preventClickOutsideToClose: true,
};

export const PositionModal = DefaultModal.bind({});
PositionModal.storyName = 'Position for modal';
PositionModal.args = {
  center: true,
};

export const SizeModal = DefaultModal.bind({});
SizeModal.args = {
  size: 'sm',
};
