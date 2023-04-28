export default function Heading2({ text, className = "", ...props }) {
    return (
        <h2 className="text-4xl font-bold dark:text-white" {...props}>{ text }</h2>
    )
}
