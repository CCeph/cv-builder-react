export default function Input({labelTitle, inputName, inputType="text", value, valueHandler}) {
    return (
        <>
        <label htmlFor={inputName}>{labelTitle}</label>
        <input type={inputType} name={inputName} id={inputName}
        value={value} onChange={(e) => valueHandler(e.target.value)}/>
        </>
    )
}