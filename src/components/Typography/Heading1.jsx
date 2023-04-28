export default function Heading1({ text, className = "", ...props }) {
    return (
        <h1 className={`text-5xl font-extrabold dark:text-white ${className}`} {...props}>{ text }</h1>
    )
}
