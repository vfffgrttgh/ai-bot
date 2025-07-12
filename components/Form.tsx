"use client"
import InputField from "./Input";
import Button from "./Button";
import React, { useState } from "react";
import useInput from "@/utils/useInput";
import { POST } from "@/utils/Calls";

export default function Form() {
    // STATE DECLARATIONS
    const [output, setOutput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const inputData = useInput("");

    // FUNCTION STATEMENTS
    async function handleClick(e: React.FormEvent) {
        e.preventDefault();
        inputData.setText("");
        setLoading(true);
        const data = await POST(inputData.text);
        setOutput(data);
        setLoading(false);
    }
    return (
        <>
            <form method="POST" onSubmit={handleClick} className="border-white border-3 rounded-xl pb-5 pt-5">
                <h1 className="text-3xl text-center">Message AI Bot...</h1>
                <InputField
                    placeholder="Enter message..."
                    value={inputData.text}
                    handleChange={inputData.handleChange}
                /><br />
                <Button
                    text={loading ? "SENDING..." : "SEND"}
                    disabled={loading}
                />
            </form>

            <p>
                {output}
            </p>
        </>
    )
}