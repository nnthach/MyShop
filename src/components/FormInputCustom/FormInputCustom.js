function FormInputCustom({ label, type, isRequire = false, placeholder, data, ...prop }) {
    const renderInput = () => {
        if (type === 'text') {
            return (
                <input
                    className={`h-[37px] px-2 border border-gray-300 outline-none focus:border-gray-500`}
                    type="text"
                    placeholder={placeholder ? placeholder : label}
                    {...prop}
                />
            );
        } else if (type === 'select') {
            return (
                <select {...prop} className={`h-[37px] px-2 border border-gray-300 outline-none focus:border-gray-500`}>
                    <option value="">{placeholder ? placeholder : label}</option>
                    {data.map((d) => (
                        <option key={d?.value} value={d?.value}>
                            {d?.label}
                        </option>
                    ))}
                </select>
            );
        } else if (type === 'textarea') {
            return (
                <textarea
                    className={`h-[100px] py-1 px-2 border border-gray-300 outline-none focus:border-gray-500`}
                    placeholder={placeholder ? placeholder : label}
                    {...prop}
                ></textarea>
            );
        }
    };
    return (
        <div className="flex gap-1 flex-col w-full">
            <label className="text-gray-900">
                {label} {isRequire && <span className="text-red-500">*</span>}
            </label>
            {renderInput()}
        </div>
    );
}

export default FormInputCustom;
