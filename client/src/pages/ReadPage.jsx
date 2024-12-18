import axios from "axios";
import { useEffect, useState } from "react";
import Task from "../component/Task";

const ReadPage = () => {
  const [retrivedTasks, setRetrivedTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/task/all");
      console.log(data);
      setRetrivedTasks(data.tasks);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-green-500 flex flex-col items-center">
      {retrivedTasks.map((item, index) => (
        <Task key={index} taskName={item.task} id={item._id} />
      ))}
    </div>
  );
};
export default ReadPage;
