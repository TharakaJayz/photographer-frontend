import React from "react";

interface ErrorDetails {
    message: string;
    btn1: [boolean, string];
    btn2: [boolean, string, string];
}

interface ErrorCardProps {
    details: ErrorDetails;
    fn: (state: { btn1: boolean; btn2: boolean }) => void;
}

const ErrorCard: React.FC<ErrorCardProps> = (props) => {
    const btnHandler1 = () => {
        props.fn({ btn1: true, btn2: false });
    };

    const btnHandler2 = () => {
        props.fn({ btn1: false, btn2: true });
    };

    return (
        <div className="fixed top-0  left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-20 z-[7000000]">
            <div className="p-[5vh_5vw] bg-gray-200 flex flex-col justify-center items-center rounded-lg">
                <p className="text-xl mb-4 capitalize text-black">
                    {props.details.message}
                </p>
                <section className="mt-12 flex gap-4">
                    {props.details.btn1[0] && (
                        <button
                            id="ER_btn1"
                            className="text-lg py-1 px-6 border-transparent cursor-pointer rounded-md bg-white"
                            onClick={btnHandler1}
                        >
                            {props.details.btn1[1]}
                        </button>
                    )}
                    {props.details.btn2[0] && (
                        <button
                            id="ER_btn2"
                            className={`text-lg py-1 px-6 border-transparent cursor-pointer rounded-md ${props.details.btn2[2]}`}
                            onClick={btnHandler2}
                        >
                            {props.details.btn2[1]}
                        </button>
                    )}
                </section>
            </div>
        </div>
    );
};

export default ErrorCard;
