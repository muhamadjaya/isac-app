const Show = ({ when, children, fallback = null }) => {
    return when
        ? <>{children}</>
        : <>{ fallback }</>
}


export default Show
