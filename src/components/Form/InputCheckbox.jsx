import { Checkbox, Label } from 'flowbite-react'

const InputCheckbox = ({id = null, label, ...props}) => {
    return (
        <div className="flex items-center gap-2">
            <Checkbox id={id} {...props} />
            <Label htmlFor={id}>
                {label}
            </Label>
        </div>
    )
}

export default InputCheckbox
