// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
// //import "tailwindcss/tailwind.css";

// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Team", href: "#", current: false },
//   { name: "Projects", href: "#", current: false },
//   { name: "Calendar", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export const NavBarr = () => {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//             <div className="relative flex items-center justify-between h-16">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   {open ? (
//                     <XIcon
//                       className="block h-6 w-6"
//                       aria-hidden="true"
//                       style={{ width: "10px" }}
//                     />
//                   ) : (
//                     <MenuIcon
//                       className="block h-6 w-6"
//                       aria-hidden="true"
//                       style={{ width: "10px" }}
//                     />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="hidden sm:block sm:ml-6">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current
//                             ? "bg-gray-900 text-white"
//                             : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                           "px-3 py-2 rounded-md text-sm font-medium"
//                         )}
//                         aria-current={item.current ? "page" : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 {/* Profile dropdown */}
//                 <Menu as="div" className="ml-3 relative">
//                   {({ open }) => (
//                     <>
//                       <Transition
//                         show={open}
//                         as={Fragment}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                         <Menu.Items
//                           static
//                           className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
//                         >
//                           <Menu.Item>
//                             {({ active }) => (
//                               <a
//                                 href="#"
//                                 className={classNames(
//                                   active ? "bg-gray-100" : "",
//                                   "block px-4 py-2 text-sm text-gray-700"
//                                 )}
//                               >
//                                 Your Profile
//                               </a>
//                             )}
//                           </Menu.Item>
//                           <Menu.Item>
//                             {({ active }) => (
//                               <a
//                                 href="#"
//                                 className={classNames(
//                                   active ? "bg-gray-100" : "",
//                                   "block px-4 py-2 text-sm text-gray-700"
//                                 )}
//                               >
//                                 Settings
//                               </a>
//                             )}
//                           </Menu.Item>
//                           <Menu.Item>
//                             {({ active }) => (
//                               <a
//                                 href="#"
//                                 className={classNames(
//                                   active ? "bg-gray-100" : "",
//                                   "block px-4 py-2 text-sm text-gray-700"
//                                 )}
//                               >
//                                 Sign out
//                               </a>
//                             )}
//                           </Menu.Item>
//                         </Menu.Items>
//                       </Transition>
//                     </>
//                   )}
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navigation.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className={classNames(
//                     item.current
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "block px-3 py-2 rounded-md text-base font-medium"
//                   )}
//                   aria-current={item.current ? "page" : undefined}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };