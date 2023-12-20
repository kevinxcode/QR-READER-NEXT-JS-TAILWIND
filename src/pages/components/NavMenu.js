// components/NavMenu.js
import { useState } from 'react';
import Link from 'next/link';


const NavMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="bg-white shadow-sm">
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 justify-between'>
                    <div className='flex'>
                        {/* */}
                        <div className='flex flex-shrink-0 items-center'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-gray-100"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="100%" height="100%" rx="16" fill="currentColor"></rect>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                    fill="black"></path>
                            </svg>
                        </div>

                        {/* */}
                        <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <a href="/" class="border-slate-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" aria-current="page">Dashboard</a>
                            <a href="/qr-reader" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">QR-Reader</a>
                        </div>
                        {/* */}
                    </div>

                    <div class="-mr-2 flex items-center sm:hidden">
                        <button onClick={toggleMenu} class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2" id="headlessui-disclosure-button-:Rqda:" type="button" aria-expanded="false" data-headlessui-state="">
                            <span class="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="block h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="block h-6 w-6"> <path stroke-linecap="round" stroke-linejoin="round"  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>
            {isMenuOpen && (
                <div className='sm:hidden'>
                    <div class="space-y-1 pt-2 pb-3">
                        <a href="/" class="bg-slate-50 border-slate-500 text-slate-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" aria-current="page" data-headlessui-state="open">Dasahboard</a>
                        <a href="/playground" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" data-headlessui-state="open">Playground</a>
                    </div>
                    <div class="border-t border-gray-200 pt-4 pb-3">
                        <div class="mt-3 space-y-1">
                            <button class="flex w-full px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Sign in</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavMenu;