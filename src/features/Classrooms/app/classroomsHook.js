import APIClient from "@/lib/APIClient/Client";
import useSWR from "swr";
import endpoints from "@/features/Classrooms/config/endpoints";
import CommonSWRDestructor from "@/lib/CommonSWRDestructor";

export default function useClassrooms() {
    const classroomsApi = new APIClient(endpoints)

    const getClassrooms = (params) => {
        const teachers = useSWR(classroomsApi.url('index', params), () => classroomsApi.instantCall('index', { params }))
        return CommonSWRDestructor(teachers)
    }

    const storeClassrooms = async (data) => {
        return await classroomsApi.callAndFormat('store', { data })
    }

    const updateClassrooms = async (id, data) => {
        return await classroomsApi.callAndFormat('update', {
            data,
            params: { id }
        })
    }

    const getClassroomDetail = async (id) => {
        return await classroomsApi.callAndFormat('detail', {params: {id}})
    }

    return {
        classroomsApi,
        getClassrooms,
        storeClassrooms,
        updateClassrooms,
        getClassroomDetail,
    }
}
