import {Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-3">
            <footer className="bg-white rounded-lg shadow-lg dark:bg-gray-900 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Amazon Ero</span>
                        </a>
                        <ul className="flex flex-wrap gap-5 text-xl  items-center mb-6 font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li> <Link to={`/`}>Home</Link> </li>
                            <li>  <Link to={`/about`}>About</Link> </li>
                            <li>  <Link to={`/products`}>Products</Link> </li>
                            <li>  <Link to={`/dashboard`}>Dashboard</Link> </li>
                            
                        </ul>
                    </div>
                    <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-lg font-semibold text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Amazon Ero</a></span>
                </div>
            </footer>


        </div>
    );
};

export default Footer;