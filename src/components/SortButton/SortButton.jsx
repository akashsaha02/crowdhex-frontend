const SortButton = ({ handleSort, sortOrder }) => {
    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={handleSort}
                className="bg-teal-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-teal-700 transition"
            >
                Sort by Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>
        </div>
    );
};

export default SortButton;
