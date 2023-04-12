import { useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFaceSadCry } from "@fortawesome/free-regular-svg-icons";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="text-center flex justify-center items-center h-screen  ">
            <div className="border-2 p-10 rounded-md border-[#7E90FE] ">
                <p className="text-6xl"><FontAwesomeIcon icon={faFaceSadCry}></FontAwesomeIcon></p>
                <h1 className="text-5xl text-red-600 font-bold py-5">404</h1>
                <h3 className="text-lg font-semibold text-black ">Awww, don’t cry! Please!!!! <br /> Don’t cry! It is just a 404 error!</h3>
                <p className="text-sm py-3 text-red-400">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}