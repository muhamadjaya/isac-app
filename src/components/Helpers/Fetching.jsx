const Fetching = ({status, children}) => {
    let componentName;
    switch (status) {
        case 'success':
            componentName = "WhenSuccess"
            break;
        case 'error':
            componentName = "WhenSuccess"
            break;
        default:
            componentName = "WhenLoading"
            break;
    }

    const child = children.find((child) => {
        return child.type.name === componentName
    });

    return (
        <>
            {child}
        </>
    )
}

export default Fetching
