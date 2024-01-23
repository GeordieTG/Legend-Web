const OutgoingMessage = (props:any) => {
    return (
        <div className="flex flex-col items-end mb-1">
            <div className="break-words max-w-xl text-md bg-blue-600 text-white rounded-2xl px-4 py-5" key={props.index}>{props.message.text}</div>
        </div>
    )
}

export default OutgoingMessage;