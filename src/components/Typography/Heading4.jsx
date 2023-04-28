export default function Heading4({ text, className = "", ...props }) {
    return (
        <h4 className="text-2xl font-bold dark:text-white" {...props}>{ text }</h4>
    )
}
