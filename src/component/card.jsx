import React from 'react'

export default function Card(props) {
  return (
    <div style={{backgroundColor: `${props.i % 2 === 1 ? '#e6ca2e' : '#cc752e'}`, marginBottom: 10, width: 398, borderRadius: 10, padding:5}}>
      <table>
        <tbody>
          <tr>
            <td>Nama Lengkap</td>
            <td>:</td>
            <td>{props.data.nama_lengkap}</td>
          </tr>
          <tr>
            <td>Nama Panggilan</td>
            <td>:</td>
            <td>{props.data.nama_panggilan}</td>
          </tr>
          <tr>
            <td>NIM</td>
            <td>:</td>
            <td>{props.data.nim}</td>
          </tr>
          <tr>
            <td>Nomor Tlp</td>
            <td>:</td>
            <td>{props.data.nomor_telepon}</td>
          </tr>
          <tr>
            <td>Id Line</td>
            <td>:</td>
            <td>{props.data.id_line}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>{props.data.email}</td>
          </tr>
          <tr>
            <td>Hobi</td>
            <td>:</td>
            <td>{props.data.hobi}</td>
          </tr>
          <tr>
            <td>Tanggal Lahir</td>
            <td>:</td>
            <td>{props.data.tanggal_lahir === undefined || props.data.tanggal_lahir === null ? '-' : props.data.tanggal_lahir}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}