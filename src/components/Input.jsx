export default function Input({inputName, inputType}) {
    return (
        <>
        <label htmlFor={inputName}>{inputName}</label>
        <input type={inputType} name={inputName} id={inputName} />
        </>
    )
}