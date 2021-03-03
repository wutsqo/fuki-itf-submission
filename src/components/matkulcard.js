import React from "react";

const MatkulCard = (props) => {
  return (
    <div className="bg-whitesmoke rounded-xl mx-1 p-4 mt-6">
      <div>
        <p className="text-skyblue font-bold text-lg">
          {props.matkul.namaMatkul}{" "}
          <span className="font-normal">({props.matkul.jumlahSKS} SKS)</span>
        </p>
      </div>
      <div className="mt-4 text-sm md:text-base">
        <table>
          <tbody>
            <tr>
              <td className="w-1/5 align-top">Dosen</td>
              <td>{props.matkul.dosen}</td>
            </tr>
            <tr>
              <td className="w-1/5 align-top">Deskripsi</td>
              <td>{props.matkul.deskripsi}</td>
            </tr>
            <tr>
              <td className="w-1/5 align-top">Semester</td>
              <td>
                {props.matkul.semester} {props.matkul.tahunAjar}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <p className="text-base text-olivedrab font-bold">Tambah Tugas</p>
        <div className="mt-2 flex space-x-1">
          <div className="w-full">
            <p>Nama Tugas</p>
            <input
              type="text"
              className="mt-1 px-2 block w-full border-darkslategray border rounded-md h-8"
            />
          </div>
          <div className="w-full">
            <p>Deadline</p>
            <input
              type="date"
              className="mt-1 px-2 block w-full border-darkslategray border rounded-md h-8"
            />
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <button className="bg-olivedrab text-whitesmoke py-2 px-5 rounded-md text-sm">
          Tambah
        </button>
      </div>
    </div>
  );
};

export default MatkulCard;
