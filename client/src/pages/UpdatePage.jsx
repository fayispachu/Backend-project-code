import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function UpdatePage() {
  const { id } = useParams();
  const [task, setTask] = useState("");
  const fetchRecord = async () => {
    try {
      const { data } = axios.get(`http://localhost:3000/api/task/one?id=${id}`);
      console.log(data);
      setTask(data.task.task);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchRecord();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center mt-28">
        <input type="text " value={task} className="border border-red-700" />
        <button className="bg-red-500 p-2 ">Update</button>
      </div>
    </>
  );
}

export default UpdatePage;
