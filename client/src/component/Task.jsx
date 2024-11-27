import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import Link from "react-router-dom";
const handleRefresh = () => {
  window.location.reload();
};

function Task({ taskName, id }) {
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/task/delete?id=${id}`
      );
      console.log(data);

      // alert(data.msg);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
      <div className="bg-yellow-400 w-1/2 p-4 rounded-lg my-4 flex items-center justify-between">
        <Link to={`update/${id}`}>
          <BiEdit />
        </Link>
        {taskName}
        <MdDelete
          onClick={() => {
            handleDelete();
            handleRefresh();
          }}
          className="hover:cursor-pointer"
        />
      </div>
    </>
  );
}
Task.propTypes = {
  taskName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Task;
