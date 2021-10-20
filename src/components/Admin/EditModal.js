import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';

const EditModal = ({ productId, isOpen, setIsOpen }) => {
  const [fetchedProduct, setFetchedProduct] = useState({});
  const [newProduct, setNewProduct] = useState({ ...fetchedProduct });

  useEffect(() => {
    const getProduct = async (productId) => {
      console.log('hahaha');
    };
  }, []);

  const submitEdit = (id) => {
    // await axios.post(`http://localhost:5000/api/products/${id}`);
  };

  const EditProductForm = () => {
    return (
      <form>
        <label>
          <span className='block'>Nome</span>
          <input
            type='text'
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className='bg-white border border-gray-200 px-2 py-1 rounded-sm font-'
          />
        </label>
        <label>
          <span className='block'>Nome</span>
          <input
            type='text'
            value={newProduct.weight}
            onChange={(e) =>
              setNewProduct({ ...newProduct, weight: Number(e.target.value) })
            }
            className='bg-white border border-gray-200 px-2 py-1 rounded-sm font-'
          />
        </label>
      </form>
    );
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
              <div className='inline-block w-full max-w-6xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'>
                  Modifica il Prodotto
                </Dialog.Title>
                <div className='mt-2'>
                  <EditProductForm />
                </div>

                <div className='mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={() => setIsOpen(false)}>
                    Conferma Modifiche
                  </button>
                  <button
                    type='button'
                    className='inline-flex justify-center mx-2 px-4 py-2 text-sm font-medium text-blue-900 border-2 border-blue-100 rounded-md hover:bg-blue-100 tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
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
export default EditModal;
