import { useState } from "react";

export default function useInput(defaultValue: string) {
    const [text, setText] = useState<string>(defaultValue);
    function handleChange(e: { target: HTMLInputElement }) {
        setText(e.target.value);
    }

    return { text, setText, handleChange };
}