import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from "next/image";
import {faCode, faEllipsis, faPlay} from '@fortawesome/free-solid-svg-icons';


function QuizCard(props) {
    return (
        <div className="rounded-[10px] flex flex-col gap-2 border bg-amber-300 bg-white p-4">
            <div className="relative bg-green-700 w-full h-32 flex justify-center items-center rounded-md">
                <div className="absolute cursor-pointer top-3 right-3">
                    <FontAwesomeIcon
                        className="text-white"
                        icon={faEllipsis}
                        width={13}
                        height={13}
                    />
                </div>
                    <FontAwesomeIcon
                        icon={faCode}
                        width={80}
                        height={80}
                        className="text-white"
                    />
            </div>
            <h3 className="text-xl font-bold">Quiz Title</h3>
            <p className="text-sm font-light">Description of the quiz</p>
            <div className="flex gap-3">

            </div>
        </div>);
}

export default QuizCard;
