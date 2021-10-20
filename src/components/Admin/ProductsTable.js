import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
// import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isActive, setIsActive] = useState('');

  const getProducts = async () => {
    const fetchedProducts = await axios.get(
      'http://localhost:5000/api/products'
    );
    setProducts(fetchedProducts.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDeleteModal = (id) => {
    setShowDeleteModal(true);
    setIsActive(`modal-${id}`);
  };

  function DeleteActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='5'
          y='6'
          width='10'
          height='10'
          fill='#FCA5A5'
          stroke='#F87171'
          strokeWidth='2'
        />
        <path d='M3 6H17' stroke='#F87171' strokeWidth='2' />
        <path d='M8 6V4H12V6' stroke='#F87171' strokeWidth='2' />
      </svg>
    );
  }

  return (
    <>
      <div className='flex flex-col h-full'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 h-full'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Prodotto
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider '>
                      Variazioni
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Data di Creazione
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Modifica</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='text-sm font-medium text-gray-900'>
                            {product.name}
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-center'>
                        <div className='text-sm text-gray-900'>
                          {product.style.length}
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-center'>
                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                          {moment(
                            product.createdAt,
                            moment.HTML5_FMT.DATETIME_LOCAL_MS
                          ).format('DD-MM-YYYY')}
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <span className='text-indigo-600 hover:text-indigo-900'>
                          <div className='ml-auto flex justify-end'>
                            <button
                              onClick={() => handleDeleteModal(product._id)}
                              className={`w-fit-content text-center hover:bg-red-100 hover:text-black text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                              <DeleteActiveIcon
                                className='w-5 h-5 mr-2 text-blue-500'
                                aria-hidden='true'
                              />
                              Elimina
                            </button>
                            <DeleteModal
                              isOpen={
                                showDeleteModal &&
                                isActive === `modal-${product._id}`
                              }
                              setIsOpen={setShowDeleteModal}
                              productId={product._id}
                            />
                          </div>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
