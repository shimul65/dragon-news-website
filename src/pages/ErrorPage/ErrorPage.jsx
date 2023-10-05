import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="mx-auto mt-40 card w-96 md:w-[700px] bg-base-100 shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-xl text-red-500 font-semibold text-center">-----  Oops !! -----</h2>
                <p>{error.statusText || error.message}</p>
                {
                    error.status === 404 &&
                    <div>
                        <h3>Page Not Found</h3>
                        <NavLink to='/'><div className="card-actions justify-center mt-5">
                            <button className="btn btn-neutral">Go Back</button>
                        </div></NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;