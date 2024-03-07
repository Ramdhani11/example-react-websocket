import { useEffect } from "react";
import { io } from "socket.io-client";

const App = () => {
  useEffect(() => {
    const socket = io("http://localhost:8000/");
    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, []);
  return (
    <div>
      <div>Datas</div>
      <form>
        <input type="text" name="" id="" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default App;
