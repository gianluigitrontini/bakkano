import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';

const DeleteModal = ({ productId, isOpen, setIsOpen }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={() => setIsOpen(false)}>
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-50'
              leave='ease-in duration-200'
              leaveFrom='opacity-50'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-50' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <div className='inline-block w-full max-w-sm p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'>
                  Elimina Prodotto
                </Dialog.Title>
                <div className='mt-2'>
                  Confermi di voler eliminare il prodotto?
                </div>

                <div className='mt-4 flex justify-center mx-auto'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500'
                    onClick={() => handleDelete(productId)}>
                    Elimina
                  </button>
                  <button
                    type='button'
                    className='inline-flex justify-center mx-2 px-4 py-2 text-sm font-medium text-gray-900 border-2 border-gray-100 rounded-md hover:bg-gray-100 tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={() => setIsOpen(false)}>
                    Annulla
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default DeleteModal;
