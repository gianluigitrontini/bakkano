import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Dropdown({ editProduct, deleteProduct }) {
  return (
    <div className='ml-auto w-56 text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-blue-50 hover:text-white hover:bg-blue-400 rounded-md bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            Opzioni
            <ChevronDownIcon
              className='w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='z-50 absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={editProduct}
                    className={`${
                      active ? 'bg-blue-50 text-black' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    {active ? (
                      <EditActiveIcon
                        className='w-5 h-5 mr-2'
                        aria-hidden='true'
                      />
                    ) : (
                      <EditInactiveIcon
                        className='w-5 h-5 mr-2'
                        aria-hidden='true'
                      />
                    )}
                    Modifica
                  </button>
                )}
              </Menu.Item>
            </div>

            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={deleteProduct}
                    className={`${
                      active ? 'bg-red-100 text-black' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    {active ? (
                      <DeleteActiveIcon
                        className='w-5 h-5 mr-2 text-blue-500'
                        aria-hidden='true'
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className='w-5 h-5 mr-2 text-blue-500'
                        aria-hidden='true'
                      />
                    )}
                    Elimina
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='#eee'
        stroke='#ccc'
        strokeWidth='2'
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='#eee'
        stroke='#ccc'
        strokeWidth='2'
      />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
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
        fill='#eee'
        stroke='#ccc'
        strokeWidth='2'
      />
      <path d='M3 6H17' stroke='#ccc' strokeWidth='2' />
      <path d='M8 6V4H12V6' stroke='#ccc' strokeWidth='2' />
    </svg>
  );
}

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
