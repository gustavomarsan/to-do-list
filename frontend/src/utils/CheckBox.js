function CheckBox({ label, value, setValue }){
    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            checked={value}
            onChange={() => setValue(!value)}
          />
          {label}
        </label>
      </div>
    );
}

export default CheckBox;