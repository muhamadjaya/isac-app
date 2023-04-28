import Show from "@/components/Helpers/Show"
import LoopRender from "@/components/Helpers/LoopRender"

const error = (message, key) => {
    return (
        <span className="font-medium" key={key}>{message}</span>
    )
}

const InputError = ({ errors = [] }) => {
    return (
        <Show when={errors.length > 0}>
            <LoopRender data={errors} render={error} />
        </Show>
    )
}

export default InputError
