const SortButton = ({ handleSort, sortOrder }) => {
    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={handleSort}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Sort by Minimum Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>
        </div>
    );
};

export default SortButton;
