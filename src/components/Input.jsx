export default function Input({labelTitle, inputName, inputType}) {
    return (
        <>
        <label htmlFor={inputName}>{labelTitle}</label>
        <input type={inputType} name={inputName} id={inputName} />
        </>
    )
}