import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const data = [
    { image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fHww', name: 'Halloween', artist: 'Prashant', added: false, },
    { image: 'https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG11c2ljfGVufDB8fDB8fHww', name: 'Challenger', artist: 'Nisha', added: false, },
    { image: 'https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG11c2ljfGVufDB8fDB8fHww', name: 'Perfect', artist: 'Nishant', added: false, },
    { image: 'https://images.unsplash.com/photo-1605731414532-6b26976cc153?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG11c2ljfGVufDB8fDB8fHww', name: 'Love Sky', artist: 'Himanshu', added: false, },
    { image: 'https://images.unsplash.com/photo-1535992165812-68d1861aa71e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG11c2ljfGVufDB8fDB8fHww', name: 'Head Up', artist: 'Jackey', added: false, },
  ];

  const [songData, setSongData] = useState(data);

  const handleSongChange = (index) => {
    setSongData(prev => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return {...item, added: !item.added}
        return item;
      })
    })
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-400">
        <Navbar values={songData} />
        <div className="px-20 mt-2 flex flex-wrap gap-10">
          {songData.map((item, index) => (
            <Card values={item} key={index} index={index} func={handleSongChange} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
