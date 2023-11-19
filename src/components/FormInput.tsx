const formInput = (props: any) => {
    return (
        <>
            <label htmlFor={props.type} className="block text-sm font-medium leading-6 text-gray-900">
                {props.label}
            </label>

            <input style={{color: "black" }} max="10" step="1" type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
        </>
    )
}

export default formInput