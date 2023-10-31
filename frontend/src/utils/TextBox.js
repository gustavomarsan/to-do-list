
function TextBox({ value, setValue }) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

export default TextBox;