import { Label, TextInput as Input } from "flowbite-react";
import { useField } from "formik";
import Show from "../Helpers/Show";
import ValidationError from "./ValidationError";

export default function TextInput({label, ...props}) {
    const [field, meta] = useField(props)
    return (
        <div>
            <Show when={label}>
                <div className="mb-2 block">
                    <Label
                        htmlFor={props.id || props.name}
                        value={label}
                        className="font-bold"
                    />
                </div>
            </Show>
            <Input {...field} {...props} helperText={<ValidationError meta={meta} />} />
        </div>
    )
};
