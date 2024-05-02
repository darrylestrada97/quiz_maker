import React from "react";
import Image from 'next/image';
function PlaceHolder(props){
    return(
        <div className={"poppins flex-col gap-3 p-4 flex justify-center items-center"}>
            <Image
                src={"/img/placeholder.png"}
                alt="palceholder image"
                width={200}
                height={200}
            />
            <h2 className="text-xl font-bold">No quizzes found</h2>
            <p className="text-sm font-light">Create a quiz to get started</p>
            <button className={"p-3 px-4 text-white text-[12px] bg-green-700 rounded-md"}>Create a quiz</button>


    </div>)
}
export default PlaceHolder;