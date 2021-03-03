import React from "react";
import tw from "twin.macro";

const MatkulContainer = tw.div`bg-whitesmoke rounded-xl mx-1 p-4 mt-6 max-w-md lg:max-w-lg`;
const MatkulName = tw.p`text-skyblue font-bold text-base md:text-lg`;
const JumlahSKS = tw.span`font-normal`;
const MatkulDetail = tw.table`mt-4 text-xs md:text-base`;
const TableRow = tw.tr``;
const TableBody = tw.tbody``;
const DetailKey = tw.td`w-1/5 align-top m-1 py-1 font-medium`;
const DetailValue = tw.td`m-1 pl-3 py-1`;

const MatkulCard = (props) => {
  return (
    <MatkulContainer>
      <MatkulName>
        {props.matkul.namaMatkul}{" "}
        <JumlahSKS>({props.matkul.jumlahSKS} SKS)</JumlahSKS>
      </MatkulName>

      <MatkulDetail>
        <TableBody>
          <TableRow>
            <DetailKey>Dosen</DetailKey>
            <DetailValue>{props.matkul.dosen}</DetailValue>
          </TableRow>
          <TableRow>
            <DetailKey>Deskripsi</DetailKey>
            <DetailValue>{props.matkul.deskripsi}</DetailValue>
          </TableRow>
          <TableRow>
            <DetailKey>Semester</DetailKey>
            <DetailValue>
              {props.matkul.semester} {props.matkul.tahunAjar}
            </DetailValue>
          </TableRow>
          <TableRow>
            <DetailKey>Tugas</DetailKey>
            <DetailValue>
              {props.matkul.tugas.map((item) => {
                return (
                  <li key={item.namaTugas}>
                    {item.namaTugas} - Deadline: {item.deadline}
                  </li>
                );
              })}
            </DetailValue>
          </TableRow>
        </TableBody>
      </MatkulDetail>

      <div className="mt-4">
        <p className="text-base text-olivedrab font-bold">Tambah Tugas</p>
        <div className="mt-2 flex space-x-1 text-sm md:text-base">
          <div className="w-1/2 ">
            <p>Nama Tugas</p>
            <input
              type="text"
              className="mt-1 px-2 block w-full border-darkslategray border rounded-md h-6 md:h-8"
            />
          </div>
          <div className="w-1/2">
            <p>Deadline</p>
            <input
              type="date"
              className="mt-1 px-2 block w-full border-darkslategray border rounded-md h-6 md:h-8 text-xs md:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <button className="bg-olivedrab text-whitesmoke py-2 px-5 rounded-md text-sm">
          Tambah
        </button>
      </div>
    </MatkulContainer>
  );
};

export default MatkulCard;
