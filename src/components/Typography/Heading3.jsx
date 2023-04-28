export default function Heading3({ text, className = "", ...props }) {
    return (
        <h3 className="text-3xl font-bold dark:text-white" {...props}>{ text }</h3>
    )
}
