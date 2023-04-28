import { Card } from "flowbite-react"
import { toast } from "react-toastify"

import Form from "@/components/Formik/Form"
import Heading4 from "@/components/Typography/Heading4"
import InputSkeleton from "@/components/Formik/InputSkeleton"
import Line from "@/components/Utils/Line"
import route from "@/features/Classrooms/app/classroomsRoute"
import Show from "@/components/Helpers/Show"
import SubmitWithBackButton from "@/components/Formik/SubmitWithBackButton"
import TextInput from "@/components/Formik/TextInput"
import useClassrooms from "@/features/Classrooms/app/classroomsHook"
import useRouterWithFlash from "@/lib/RouterWithFlash"

export default function ClassroomForm({ data = {}, isLoading = false, ...props }) {
    const initialValues = {
        code: data?.code || '',
        name: data?.name || '',
        description: data?.description || '',
    }
    const router = useRouterWithFlash()

    const onSubmit = async (values, { setFieldError }) => {
        const { storeClassrooms, updateClassrooms } = useClassrooms()
        try {
            data?.id
                ? await updateClassrooms(data.id, values)
                : await storeClassrooms(values)
            router.pushWithSuccess(route.url('classroomsIndex'), "success yo")
        } catch (error) {
            if (error.status !== 422) toast.error(error.message)
            error.setFormikErrors(setFieldError)
        }
    }

    const formSetup = {
        initialValues,
        onSubmit
    }

    return (
        <Card>
            <Heading4 text="Form Classroom" />
            <Line />
            <Form setup={formSetup} {...props}>
                <div className="flex flex-col space-y-3">
                    <Show when={!isLoading} fallback={<InputSkeleton items={3} />}>
                        <TextInput name="code" label="Code" placeholder="Input classroom code" />
                        <TextInput name="name" label="Name" placeholder="Input classroom name" />
                        <TextInput name="description" label="Description" placeholder="Input classroom description" />
                        <SubmitWithBackButton backTo={route.url('classroomsIndex')} />
                    </Show>
                </div>
            </Form>
        </Card>
    )
}
