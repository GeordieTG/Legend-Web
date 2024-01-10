import * as Dialog from '@radix-ui/react-dialog';

const Player = (props: any) => {
    return (
        <div>

            <Dialog.Root>

                <Dialog.Trigger asChild>
                    <div className="flex flex-col items-center">
                        <img
                            className="rounded-full border"
                            style={{ width: "3rem", height: "3rem", objectFit: "cover" }}
                            src={props.image || "/greyPlus.jpeg"}
                        />

                        <p className={"text-black text-center"}>{props.text || "Add Player"}</p>
                    </div>

                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                        <Dialog.Title className="DialogTitle" style={{ color: "black" }}>Edit profile</Dialog.Title>
                        <Dialog.Description className="DialogDescription" style={{ color: "black" }}>
                            Make changes to your profile here. Click save when you're done.
                        </Dialog.Description>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="name" style={{ color: "black" }}>
                                Name
                            </label>
                            <input className="Input" id="name" defaultValue="Pedro Duarte" style={{ color: "black" }} />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="username" style={{ color: "black" }}>
                                Username
                            </label>
                            <input className="Input" id="username" defaultValue="@peduarte" style={{ color: "black" }} />
                        </fieldset>
                        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                            <Dialog.Close asChild>
                                <button className="Button green" style={{ color: "black" }}>Save changes</button>
                            </Dialog.Close>
                        </div>
                        <Dialog.Close asChild>
                            <button className="IconButton" aria-label="Close">
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

        </div>

    )
}

export default Player