import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-red-300 flex items-center justify-center h-dvh">
            <div className="p-10 text-center">
                <h2 className="text-4xl">Opps!! this page could not found</h2>
                <button onClick={()=>navigate(-1)} className="btn mt-5">Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;