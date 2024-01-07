const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin">
                <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto"></div>
            </div>
        </div>
    );
}

const Spinner1 = () => {
    return (
        <div className="relative flex items-center justify-center h-screen">
            <div className="w-16 h-16">
                <div className="flex justify-center items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
        </div>
    )
}

export default Spinner;