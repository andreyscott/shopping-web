import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {RiUserAddFill} from 'react-icons/ri'

import { BellIcon, ShoppingCartIcon,  LogoutIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink, Link } from 'react-router-dom'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import Login from "./Login";
// import Signup from "./Signup";
import { signOut } from "../redux/action";

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '/', current: null },
  { name: 'About', href: 'about', current: null },
  { name: 'Products', href: 'product', current: null },
  { name: 'Contact', href: 'contact', current: null },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Nav() {
  const state = useSelector((state) => state.handleCart);
  const userState = useSelector((userState) => userState.handleUser);
  const dispatch = useDispatch();
  console.log(userState);
  return (
    <>
  
      <div className="min-h-full">
        <Disclosure as="nav" className=" bg-white dark:bg-gray-500">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <Link to="/" className="flex-shrink-0">
                      <img
                        className=" h-14 w-14"
                        src='https://www.designfreelogoonline.com/wp-content/uploads/2016/05/000718-Free-Logo-creator-Free-bag-shopping-logo-maker-03.png'
                        // src='https://w7.pngwing.com/pngs/704/830/png-transparent-shopping-bags-trolleys-logo-shopping-cart-shopping-bag-white-luggage-bags-rectangle.png'
                        // src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
               </Link>
                  </div>
                  <div className="flex items-center">
                  <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                   
                        {navigation.map((item,  ) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className={classNames(
                            item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-600 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                    </div>

                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                    <div className='w-auto mr-1   flex items-center justify-between'>
                    <div className='flex flex-wrap text-sm max-w-lg mx-2'>
                      {userState?.state?.displayName !== null
                        ? userState?.state?.displayName
                        : userState?.state?.email}
                    </div>
                <div>
  {userState && userState?.state === null ? (

    <Link to="/login" className="flex btn trans">
                  <LogoutIcon  className="h-6 px-1 w-6" aria-hidden="true" />Login 
                </Link>

 
  ) : (
    <button
      onClick={() => dispatch(signOut())}
      className="text-black dark:text-white bg-transparent hover:bg-red-600 flex  hover:text-gray-400 font-normal py-2 px-4 border btn hover:border-transparent rounded"
    >
      <LogoutIcon className="w-5 h-5 mx-1 pt-1" /> LogOut
    </button>

  )
    
}

</div>
                <Link to="/register" className="flex btn trans hover:bg-gray-700 hover:text-white">
                <RiUserAddFill  className="h-6 p-1 w-6" aria-hidden="true" />Register 
                
                </Link>

                    <Link to="/cart" className="flex btn trans ">
                  <ShoppingCartIcon  className="h-6 p-1 w-6" aria-hidden="true" />Cart(
                    {state.length === 0? 0 : state.length}
                  )
                  {/* {state.length === 0 ? 0 : state.length}) */}
                </Link>    
                </div>


                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-black">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src=
                             {userState?.state?.photoURL === null
                        ? user.imageUrl
                        : userState?.state?.photoURL}
                            // {userState?.state?.photoURL  } 
                            alt="" />
                            
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button 
                    className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-sblue hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
                    >
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center pb-3">  
                    <div className="flex-shrink-0 flex m-1 p-1 justify-between w-full ">
                    <Link to="/login" className="flex btn trans">
                  <LogoutIcon  className="h-6 px-1 w-6" aria-hidden="true" />Login 
                </Link>
                <Link to="/register" className="flex btn trans">
                <RiUserAddFill  className="h-6 p-1 w-6" aria-hidden="true" />Register 
                </Link>
                    <Link to="/cart" className="flex btn trans ">
                  <ShoppingCartIcon  className="h-6 p-1 w-6" aria-hidden="true" />Cart 
                  {/* {state.length === 0 ? 0 : state.length}) */}
                </Link>   
                </div>
                  </div>
                    


                  <div className="flex items-center px-5">
                 
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={userState?.state?.photoURL } alt="" /> 
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-gray-400">
                      {userState?.state?.displayName !== null
                        ? userState?.state?.displayName
                        : userState?.state?.email}
                    </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                      {userState?.state?.displayName !== null
                        ?
                         userState?.state?.email
                        : userState?.state?.displayName
                        
                        }

                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
              
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
       
      </div>
    </>
  )
}
