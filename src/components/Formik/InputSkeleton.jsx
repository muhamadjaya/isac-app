export default function InputSkeleton({ items = 1 }) {
    let skeletons = []
    for (let i = 0; i < items; i++) {
        skeletons.push((
            <div role="status" className="animate-pulse mb-3">
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-2"></div>
                <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
            </div>
        ))
    }
    return (<>
        {skeletons}
    </>)
};
