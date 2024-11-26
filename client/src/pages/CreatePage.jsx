import axios from "axios";
import { useState } from "react";

function CreatePage() {
  const [userTask, setUserTask] = useState("");
  const handleAddTask = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/task/create",
        { userTask }
      );
      console.log(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <>
      <main className=" flex justify-center items-center flex-col py-56 ">
        <h1 className="font-bold text-2xl my-5">Welcome Employee</h1>
        <form action="">
          <label>
            Enter Task Name:
            <input
              className="p-1 border mx-3"
              type="text"
              value={userTask}
              onChange={(e) => setUserTask(e.target.value)}
            />
          </label>
          <button onClick={handleAddTask} className="bg-blue-400 p-1">
            Add Task
          </button>
        </form>
      </main>
    </>
  );
}

export default CreatePage;
