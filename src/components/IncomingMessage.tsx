const IncomingMessage = (props:any) => {
    return (
        <div className="mb-3">
            <div className="inline-block break-words max-w-xl text-md bg-gray-200 rounded-xl p-3" key={props.index}>{props.message.text}</div>
            <p className="text-sm">{props.message.user.name}</p>
        </div>
    )
}

export default IncomingMessage;