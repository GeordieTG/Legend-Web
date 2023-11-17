import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Dropdown = () => {
    return (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <h1>Hello</h1>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[200px] bg-white rounded-lg p-1 z-40 shadow-md border border-black/10
              data-[side=top]:animate-slide-fade-up data-[side=right]:animate-slide-fade-right 
              data-[side=bottom]:animate-slide-fade-down data-[side=left]:animate-slide-fade-left"
              sideOffset={5}
            >
              <div>
                <h1>hello</h1>
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

export default Dropdown