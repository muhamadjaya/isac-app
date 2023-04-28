import { TextInput, Label } from 'flowbite-react'
import Show from '@/components/Helpers/Show'
import React from 'react'
import InputError from '@/components/Form/InputError'

const Input = ({ label = null, id = null, errors = [], ...props }) => {
    if (errors.length) {
        props = Object.assign(props, { color: "failure" })
    }

    return (
        <>
            <Show when={label}>
                <div className="mb-2 block">
                    <Label
                        htmlFor={id}
                        value={label}
                        className="font-bold"
                    />
                </div>
            </Show>
            <TextInput
                id={id}
                helperText={<React.Fragment><InputError errors={errors} /></React.Fragment>}
                {...props}
            />
        </>
    )
}


export default Input
