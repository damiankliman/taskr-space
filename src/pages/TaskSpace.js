import "./TaskSpace.css";

import { useState, useEffect } from "react";
import Axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";

import ChatBubble from "../components/ChatBubble";
import Tasks from "../components/Tasks";

function TaskSpacePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    Axios.get("http://dev.lan:3001/read").then((response) => {
      setTasks(response.data);
    });
  }, []);

  const toggleComplete = async (_id, complete) => {
    try {
      await Axios.put(`http://dev.lan:3001/complete/${_id}`, {
        complete: !complete,
      });
      Axios.get("http://dev.lan:3001/read").then((response) => {
        setTasks(response.data);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const toggleDelete = (_id) => {
    Axios.delete("http://dev.lan:3001/delete", { data: { _id: _id } });
    const newTasks = tasks.filter((task) => task._id !== _id);
    setTasks(newTasks);
  };

  return (
    <div className="interface-wrapper">
      <div className="header">
        <div className="title">Title</div>
        <button className="btn--circle">
          <FontAwesomeIcon
            icon={faUserPlus}
            style={{ color: "#868a92" }}
            size="lg"
          />
        </button>
      </div>
      <div className="task-list">
        <Tasks
          tasks={tasks}
          onToggle={toggleComplete}
          onDelete={toggleDelete}
        />
      </div>
      <div className="chat-list">
        <ChatBubble
          msgStyle="sent"
          name="Damian"
          message="I think this is going great!"
        />
        <ChatBubble
          msgStyle="recieved"
          name="Natalie"
          message="Your code is spaget"
        />
        <ChatBubble
          msgStyle="recieved"
          name="Natalie"
          message="Fix this nonsense"
        />
        <ChatBubble
          msgStyle="sent"
          name="Damian"
          message="I think this is going great!"
        />
        <ChatBubble
          msgStyle="recieved"
          name="Natalie"
          message="Your code is spaget"
        />
        <ChatBubble
          msgStyle="recieved"
          name="Natalie"
          message="Fix this nonsense"
        />
        <ChatBubble
          msgStyle="sent"
          name="Damian"
          message="I think this is going great!"
        />
      </div>
      <div className="footer">
        <input
          type="text"
          className="input--rounded"
          placeholder="Type a message..."
        />
        <button className="btn__send--rounded">
          <FontAwesomeIcon
            icon={faComments}
            style={{ color: "#000" }}
            size="lg"
          />
        </button>
      </div>
    </div>
  );
}

export default TaskSpacePage;