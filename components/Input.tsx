"use client"

type props = {
    value: string;
    handleChange: (e: any) => void;
    placeholder: string;
};

export default function InputField(props: props) {
    return (
        <input
            className="border-white border-2 w-[300px] h-[50px] p-2 m-2 rounded-lg text-white text-xl font-semibold"
            placeholder={props.placeholder}
            onChange={props.handleChange}
            value={props.value}
        />
    )
}