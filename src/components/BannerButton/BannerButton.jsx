function BannerButton({ label, onClick, type }) {
    if (type === "primary") {
        return (
            <button
                onClick={onClick}
                className=" text-white text-xl lg:text-2xl font-semibold bg-primary hover:bg-primaryHover px-5 lg:px-10 py-2 lg:py-4 rounded-3xl mt-7 shadow-lg shadow-gray-700"
            >
                {label}
            </button>
        );
    }

    if (type === "standard") {
        return (
            <button
                onClick={onClick}
                className="text-white text-lg lg:text-xl font-semibold bg-primary hover:bg-primaryHover px-3 lg:px-5 py-2 rounded-3xl"
            >
                {label}
            </button>
        );
    }

    if (type === "small") {
        return (
            <button
                onClick={onClick}
                className="text-white text-md font-semibold bg-primary hover:bg-primaryHover px-2 py-2 rounded-3xl"
            >
                {label}
            </button>
        );
    }

    if (type === "rounded") {
        return (
            <button
                onClick={onClick}
                className=" text-white  transition-colors duration-300 rounded-full h-[2rem] w-[2rem] font-bold text-xl bg-primary hover:bg-primaryHover "
            >
                {label}
            </button>
        );
    }
}

export default BannerButton;