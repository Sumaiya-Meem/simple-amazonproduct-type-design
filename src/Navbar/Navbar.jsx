import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between py-5 shadow-lg px-3 text-xl mb-3">
                <h1 className="text-2xl font-semibold">Amazon Ero</h1>
                <nav >
                    <ul className="flex gap-6">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-200 p-1 rounded-lg" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-200 p-1 rounded-lg" : ""
                            }
                        >
                           About
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-200 p-1 rounded-lg" : ""
                            }
                        >
                           Products
                        </NavLink>
                        <NavLink
                            to="dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gray-200 p-1 rounded-lg" : ""
                            }
                        >
                          Dashboard
                        </NavLink>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default Navbar;