import Router from "@/lib/Router";
import routes from "@/features/Classrooms/config/routes";

export default new Router(routes, process.env.APP_URL)
