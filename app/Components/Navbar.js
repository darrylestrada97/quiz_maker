import React from 'react';
import Image from "next/image";

function Navbar(props){
    return (
        <header>
            <div className="poppins mx-auto max-w-screen-xl p-4 sm:px-8 sm:py-5 lg:px-10">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <a className="flex gap-1 items-center justify-center">
                            <Image
                                className="logo "
                                src="/img/logo.webp"
                                alt="logo image"
                                width={60}
                                height={60}
                            />

                            <h2 className="text-2xl font-bold flex gap-2">Quiz <span className="text-green-600">Maker!</span> </h2>
                        </a>

                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">


                        <button
                            className="block rounded-lg bg-amber-200 text-amber-800 px-5 py-3 text-sm font-medium
                            transition hover:bg-amber-300 focus:outline-none focus:ring"
                            type="button"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;