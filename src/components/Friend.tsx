const Friend = (props: any) => {
    return (
        <>
            <div className="flex gap-4 items-center bg-white rounded-md py-1 relative">
                <img
                    className="ml-3 rounded-3xl top-40"
                    style={{width: "2rem", height: "2rem"}}
                    src="/defaultpfp.svg"
                />

                <div>
                    <p className="text-black">{props.name}</p>
                    <small className="text-gray-600">@{props.username}</small>
                </div>

                <button className="rounded-3xl font-bold raleway m-3 bg-black text-white px-3 py-1 absolute right-0">Follow</button>

            </div>
        </>
    )
}

export default Friend