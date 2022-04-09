import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Title from "./components/Title";
import ChatBox from "./components/ChatBox";
import Message from "./components/Message";
import Login from "./components/Login";
import { DatePicker, Button } from 'antd';
import 'antd/dist/antd.css'
import './App.css'





function App() {
  const [rooms, setRooms] = useState([]);
  const roomsCollectionsRef = collection(db, "rooms");

  useEffect(() => {


    const getRooms = async () => {
      const data = await getDocs(roomsCollectionsRef);
      setRooms(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

      console.log(data.docs)
    }

    getRooms()

  }, []);


  return (

    <div className="App">
      {/* {rooms.map((room) => {
        return (
          <div> 

            <h1>{room.name}</h1>
          </div>
        );
      })} */}

      <Title name="some title"/>
      <br></br>
      
      <ChatBox />
      <Login title="Create Room"/>
      <Login title="Join Room"/>

      <Message />

    </div>

  

  );
}

export default App;