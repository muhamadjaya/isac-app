import Show from "@/components/Helpers/Show"
import { Label, TextInput } from "flowbite-react"
import { setErrorPropsWhen, setValue } from "./helpers"
import LazyValidationError from "./LazyValidationError"

export default function LazyInput({ form, setForm, errors = [], ...props }) {
    setErrorPropsWhen(errors.length, props)
    return (
        <>
            <Show when={props?.label}>
                <div className="mb-2 block">
                    <Label
                        htmlFor={props?.id}
                        value={props.label}
                        className="font-bold"
                    />
                </div>
            </Show>
            <TextInput
                onChange={(el) => setValue(el, form, setForm)}
                helperText={<LazyValidationError errors={errors} />}
                {...props}
            />
        </>
    )
};

