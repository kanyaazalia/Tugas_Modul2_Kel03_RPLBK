import "./App.css";
import DataMahasiswa from "./component/Data.js";
import Card from "./component/Card.jsx";
import React from "react";

export default function App() {
  const [data, setData] = React.useState([]);
  const [state, setState] = React.useState(false);

  const findData = (e) => {
    const newData = DataMahasiswa.filter((mahasiswa) =>
      mahasiswa.nama_lengkap.toLowerCase().includes(e.toLowerCase())
    );
    e === "" ? setData([]) : setData(newData);
    e === "" ? setState(false) : setState(true);
    console.log(newData);
  };

  return (
    <div
      style={{
        display: "flex",
        "flex-wrap": "wrap",
        "flex-direction": "column",
        "align-content": "center",
      }}
    >
      <h2 style={{ "align-self": "center" }}>Kelompok 03:</h2>
      <input
        onChange={(data) => findData(data.target.value)}
        placeholder="Masukkan Nama Mahasiswa..."
        style={{ width: 400 }}
      />
      <br />

      {data.length !== 0 ? (
        data.map((mahasiswa, i) => {
          return <Card key={i} data={mahasiswa} i={i} />;
        })
      ) : state ? (
        <h2 style={{ "align-self": "center" }}>Data Tidak Ditemukan</h2>
      ) : (
        ""
      )}
    </div>
  );
}