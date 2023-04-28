import LoopRender from "@/components/Helpers/LoopRender";
import Show from "@/components/Helpers/Show";
import React from "react";

export default function ValidationError({meta}) {
    return (
        <React.Fragment>
            <Show when={meta.touched && meta.error}>
                <Show when={Array.isArray(meta.error) && meta.error.length} fallback={<ErrorItem message={meta.error} />}>
                    <LoopRender data={meta.error} render={renderErrorItem} />
                </Show>
            </Show>
        </React.Fragment>
    )
};


const ErrorItem = ({ message }) => {
    return <span className="font-medium" style={{ color: 'red' }}>{message}</span>
}

const renderErrorItem = (message, key) => {
    return (
        <ErrorItem message={message} key={key} />
    )
}
