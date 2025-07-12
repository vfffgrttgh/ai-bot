"use client"

type props = {
    text: string;
    handleClick?: (e?: any) => void;
    type?: "submit" | "reset";
    disabled?: boolean;
};

export default function Button(props: props) {
    return (
        <button
            disabled={props.disabled}
            type={props.type}
            className={`bg-emerald-500 text-white hover:bg-emerald-700 w-fit h-fit p-2 m-2 rounded-[6px] text-xl`}
            style={{ transition: "1s background-color", cursor: "pointer" }}
            onClick={props.handleClick}
        >{props.text}</button>
    )
}