import { useState } from "react";

function Input({ label, placeholder, value, setValue }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <label>{label}</label>
            <input
                type={placeholder === "Password" && !showPassword ? "Password" : "text"}
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {placeholder === "Password" && (
                <button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide password" : "Show password"}
                </button>
            )}
        </div>
    );
}

export default Input;