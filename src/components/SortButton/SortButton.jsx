const SortButton = ({ handleSort, sortCriteria, setSortCriteria }) => {
    const options = [
        { value: "default", label: "Default" },
        { value: "name", label: "Name" },
        { value: "newest", label: "Newest" },
        { value: "oldest", label: "Oldest" },
        { value: "asc", label: "Ascending (Donation)" },
        { value: "desc", label: "Descending (Donation)" },
    ];

    const handleChange = (e) => {
        setSortCriteria(e.target.value);
        handleSort(e.target.value);
    };

    return (
        <div className="flex justify-center w-full md:w-1/3">
            <select
                value={sortCriteria}
                onChange={handleChange}
                className="bg-teal-600 text-white font-bold px-4 py-2 rounded hover:bg-teal-700 transition w-full"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortButton;
