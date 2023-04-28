// Library
import Router from "@/lib/Router"
// Feature routes
import accounts from "@/features/Accounts/routes"
import auth from "@/features/Authentication/config/routes"
import classrooms from "@/features/Classrooms/config/routes"
import dashboard from "@/features/Dashboard/routes"
import grades from "@/features/Grades/routes"
import schedules from "@/features/Schedules/routes"
import staff from "@/features/Staff/routes"
import students from "@/features/Students/routes"
import subjects from "@/features/Subjects/routes"
import teachers from "@/features/Teachers/config/routes"

const routes = {
    ...accounts,
    ...auth,
    ...classrooms,
    ...dashboard,
    ...grades,
    ...schedules,
    ...staff,
    ...students,
    ...subjects,
    ...teachers,
}

export default new Router(routes, process.env.APP_URL)
