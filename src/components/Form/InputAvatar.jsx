import { Avatar } from "flowbite-react";
import Show from "@/components/Helpers/Show";
import { useState } from "react";

export default function InputAvatar({ initialImage = null, desc = null, formData, setFormData, ...props }) {
    let inputElement
    const [imagePreview, setImagePreview] = useState()

    const triggerInput = () => {
        inputElement.click()
    }

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const name = e.target.name
            const value = e.target.files[0]

            setFormData({ ...formData, [name]: value });
            setImagePreview(URL.createObjectURL(value))
        }
    };

    return (
        <>
            <Show when={imagePreview}>
                <img className="cursor-pointer rounded-full w-36 h-36 object-cover" alt="click" onClick={triggerInput} src={imagePreview} />
            </Show>
            <Show when={!imagePreview}>
                <Avatar className="cursor-pointer" rounded={true} size="xl" img={initialImage} onClick={triggerInput} />
            </Show>
            <input ref={input => inputElement = input} onChange={imageChange} type="file" hidden {...props} />
        </>
    )
};
