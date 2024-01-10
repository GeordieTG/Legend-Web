const UserPreview = (props: any) => {
    return (
        <>
            <h3 className="text-black bg-white p-3 rounded-xl">{props.user.name || "Geordie Gibson"}</h3>
        </>
    )
}

export default UserPreview