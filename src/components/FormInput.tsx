const formInput = (props: any) => {
    return (
        <>
            <label htmlFor={props.type} className="block text-sm font-medium leading-6 text-gray-900">
                {props.label}
            </label>

            <input max="10" step="1" type={props.type} placeholder={props.placeholder}></input>
        </>
    )
}

export default formInput