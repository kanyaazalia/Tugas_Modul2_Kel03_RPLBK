import "./App.css";
import DataMahasiswa from "./component/data.js";
import Card from "./component/card.jsx";
import React, { useRef } from "react";

export default function App() {
  const [data, setData] = React.useState([]);
  const [state, setState] = React.useState(false);
  const inputRef = useRef()

  const findData = () => {
    
    const newData = DataMahasiswa.filter((mahasiswa) =>
      mahasiswa.nama_lengkap.toLowerCase().includes(inputRef.current.value.toLowerCase())
    );

    if(!!inputRef.current.value){
      setData([])
      setState(false)
    }
    setData(newData);
    setState(true);
    
    console.log(newData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <h2 style={{ alignSelf: "center" }}>Kelompok 03</h2>

      <input
        ref={inputRef}
        placeholder="Masukkan Nama Mahasiswa..."
        style={{ width: 400 }}
      />

      <button onClick={() => findData()}>
        Cari!
      </button>

      <br />

      {data.length !== 0 ? (
        data.map((mahasiswa, i) => {
          return <Card key={i} data={mahasiswa} i={i} />;
        })
      ) : state ? (
        <h2 style={{ alignSelf: "center" }}>Data Tidak Ditemukan</h2>
      ) : (
        ""
      )}
    </div>
  );
}