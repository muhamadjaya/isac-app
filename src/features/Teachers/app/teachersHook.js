import APIClient from "@/lib/APIClient"
import CommonSWRDestructor from "@/lib/CommonSWRDestructor"
import useSWR from 'swr'
import endpoints from "@/features/Teachers/config/endpoints"

export default function useTeachers() {
    const teachersApi = new APIClient(endpoints)

    const getTeachers = (params) => {
        const teachers = useSWR(teachersApi.url('index', params), () => teachersApi.instantCall('index', { params }))
        return CommonSWRDestructor(teachers)
    }

    const storeTeacher = async (data) => {
        return await teachersApi.callAndFormat('store', { data })
    }

    return {
        getTeachers,
        storeTeacher,
        teachersApi
    }
}
