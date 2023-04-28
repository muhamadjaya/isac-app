import LoopRender from "@/components/Helpers/LoopRender";
import Show from "@/components/Helpers/Show";
import React from "react";

export default function LazyValidationError({errors = []}) {
    return (
        <React.Fragment>
            <Show when={errors.length}>
                <LoopRender data={errors} render={renderErrorItem} />
            </Show>
        </React.Fragment>
    )
};


const renderErrorItem = (message, key) => {
    return (
        <span className="font-medium" key={key}>{message}</span>
    )
}
