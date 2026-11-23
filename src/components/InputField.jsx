function InputField({
                        label,
                        type,
                        value,
                        onChange
                    }) {
    return (
        <div className="form-group">

            <label>
                {label}
            </label>

            <input
                type={type}
                value={value}
                onChange={onChange}
            />

        </div>
    );
}

export default InputField;