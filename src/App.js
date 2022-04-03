
import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

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
      {rooms.map((room) => {
        return (
          <div> 

            <h1 style={{color : "blue"}}>{room.name}</h1>
          </div>
        );
      })}


    

    </div>
  );
}

export default App;
  