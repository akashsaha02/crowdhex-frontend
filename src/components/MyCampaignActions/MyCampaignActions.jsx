import { Link } from "react-router-dom";
const MyCampaignActions = ({ id, handleDelete }) => {

  return (
    <div className="flex justify-center items-center gap-2">
      <Link
        to={`/campaigns/update/${id}`}
        className="text-sm bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition"
      >
        Update
      </Link>
      <button
        type="button"
        className="text-sm bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};


export default MyCampaignActions;
