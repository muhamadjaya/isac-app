import { Card } from "flowbite-react"
import { toast } from "react-toastify"
import { useLazyFields } from "@/components/Form/Lazy"
import { useRouter } from "next/router"
import { useState } from "react"

import Form from "@/features/Teachers/config/form"
import InputAvatar from "@/components/Form/InputAvatar"
import route from "@/features/Teachers/app/teachersRoute"
import SubmitWithCancel from "@/components/Form/SubmitWithCancel"
import useTeachers from "@/features/Teachers/app/teachersHook"

export default function FormTeacher({ data }) {

    const [validationErrors, setValidationErrors] = useState()
    const [loading, setLoading] = useState(false)

    const { fields, formData, setFormData, resetFormData } = useLazyFields(Form, data, validationErrors)
    const { storeTeacher } = useTeachers()

    const router = useRouter()
    const submitForm = async (event) => {
        event.preventDefault()
        const { message, errors, status, success } = await storeTeacher(formData)

        success && router.push(route.url('teachersIndex'))
        !success && status !== 422 && toast.error(message)

        setValidationErrors(errors)
    }

    return (
        <Card>
            <form onSubmit={submitForm}>
                <div className="flex justify-center flex-col items-center mb-3">
                    <InputAvatar formData={formData} setFormData={setFormData} initialImage={formData?.photo} name="photo" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-2">
                        {fields(['id_number', 'name', 'place_of_birth', 'date_of_birth', 'address'])}
                    </div>
                    <div className="flex flex-col space-y-2">
                        {fields(['number', 'phone_number', 'email', 'username', 'password'])}
                    </div>
                    <div className="space-x-2 py-2 items-center flex justify-end col-span-2">
                        <SubmitWithCancel loading={loading} href={route.url('teachersIndex')} />
                    </div>
                </div>
            </form>
        </Card>
    )
}
