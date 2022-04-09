import { Fragment } from 'react'
import { MenuIcon, XIcon, GlobeIcon } from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/dist/client/link'
import Logo from '../../public/Logo.png'
import Image from 'next/image'

const navigation = [
  { name: 'Serviços', href: '/servicos' },
  { name: 'Sobre Nós', href: '/sobre' }
]

// import { Container } from './styles';

export default function Navbar() {
  return (
    <div>
      <Popover className="border-b-2 border-gray-200 pb-2 lg:pb-5 font-bold dark:bg-bg dark:border-gray-500">
        <div className="relative pt-4 lg:pt-6 px-4 sm:px-6 lg:px-8 ">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <a>
                    <img
                      src="./Logo.svg"
                      className="h-16 w-16 sm:h-20 sm:w-20 text-principal"
                    />
                  </a>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map(item => (
                <Link key={item.name} href={item.href}>
                  <a className="font-bold text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    {item.name}
                  </a>
                </Link>
              ))}
              <Link href="/orcamento">
                <a className="font-bold text-principal hover:text-principalh">
                  Orçamento
                </a>
              </Link>
            </div>
          </nav>
        </div>

        <Popover.Panel className="absolute z-30 top-0 inset-x-0 p-2 transition transform md:hidden origin-top-right ">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link href="/">
                  <a>
                    <img
                      src="./Logo.svg"
                      className="h-16 w-16 sm:h-6 sm:w-6 text-principal"
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Link key={item.name} href={item.href}>
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <Link href="/orcamento">
              <a className="block w-full px-5 py-3 text-center font-medium text-principal bg-gray-50 hover:bg-gray-100">
                Orçamentos
              </a>
            </Link>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  )
}
