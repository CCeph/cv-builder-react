export default function FlexInput({
  labelTitle,
  inputName,
  inputType = "text",
  value,
  valueHandler,
  scriptName,
}) {
  return (
    <>
      <label htmlFor={inputName}>{labelTitle}</label>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        value={value}
        onChange={(e) => valueHandler(e)}
        data-script-name={scriptName}
      />
    </>
  );
}
