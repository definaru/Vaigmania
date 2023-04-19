import Link from 'next/link'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { HiOutlineMail, HiOutlineTranslate, HiOutlineMoon } from 'react-icons/hi'
import { Nav } from '../../ui/menu/Nav'


const profile = [
    {
        value: 'ee',
        name: 'Eesti'
    }, 
    {
        value: 'en',
        name: 'English'
    }, 
    {
        value: 'ru',
        name: 'Русский'
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Header() 
{
    return (
        <div className="w-full fixed z-50 top-0">
            <Disclosure as="nav" className="bg-white">
                {({ open }) => (
                <>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center">
                            <div className="flex items-center justify-between w-full">
                                <Link href="/" className="flex items-center">
                                    <img
                                        className="h-15 w-16"
                                        src="/access/img/vaigmania.svg"
                                        alt="Vaigmania"
                                    /> 
                                    <div className="pl-2 navbar-brand text-4xl mt-1 hover:text-gray-600">
                                        Vaigmania
                                    </div>                          
                                </Link>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4 text-gray-500 mt-1 text text-sm">
                                        The official website of Ray Vaigmi
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6 gap-3">
                                        <Menu as="div" className="relative">
                                        {({ open }) => (
                                            <>
                                            <Menu.Button className="bg-gray-50 p-1 rounded-full text-gray-700 hover:text-black focus:outline-none mt-1">
                                                <HiOutlineTranslate className="h-6 w-6" />
                                            </Menu.Button>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items static
                                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                >
                                                {profile.map((item, i) => (
                                                    <Menu.Item key={i}>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'flex gap-2 items-center px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            <img src={`/access/img/lang/${item.value}.svg`} className="h-4 w-5 border" alt={item.value} />
                                                            {item.name}
                                                        </a>
                                                    )}
                                                    </Menu.Item>
                                                ))}
                                                </Menu.Items>
                                            </Transition>
                                            </>
                                        )}
                                        </Menu>
                                        <a href="mailto:heart@vaigmania.ru" target="_blank" className="bg-gray-50 p-1 rounded-full text-gray-700 hover:text-black focus:outline-none">
                                            <HiOutlineMail className="h-6 w-6" />
                                        </a>                            
                                        <button className="bg-gray-50 p-1 rounded-full text-gray-700 hover:text-black focus:outline-none">
                                            <HiOutlineMoon className="h-6 w-6" />
                                        </button>                            
                                    </div>
                                </div>                
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <Disclosure.Button className="bg-white text-gray-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                    {open ? <XIcon className="block h-7 w-7" /> : <MenuIcon className="block h-7 w-7" />}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                    <Nav />

                    <Disclosure.Panel className="md:hidden">
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="mt-3 px-2 space-y-1">
                                {profile.map((item, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="flex gap-2 items-center px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                        <img src={`/access/img/lang/${item.value}.svg`} className="h-4 w-5 border" alt={item.value} />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
                )}
            </Disclosure>
        </div>
    )
}