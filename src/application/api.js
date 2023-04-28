import auth from "@/features/Authentication/config/endpoints"
import teachers from "@/features/Teachers/config/endpoints"
import classrooms from "@/features/Classrooms/config/endpoints"
import APIClient from "@/lib/APIClient"

const endpoints = {
    ...auth,
    ...classrooms,
    ...teachers,
}

export default new APIClient(endpoints)
