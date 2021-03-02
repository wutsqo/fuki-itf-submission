import React from "react";
import tw from "twin.macro";

const Form = tw.input`mt-1 px-2 block w-full border-darkslategray border rounded-md h-8`;
const Label = tw.label`block mt-3`;
const TextArea = tw.textarea`mt-1 block w-full border-darkslategray border rounded-md h-20`;
const FormPlaceholder = tw.span`text-darkslategray`;
const SelectInput = tw.select`mt-1 px-2 block w-full border-darkslategray border rounded-md h-8`;

const TambahKuliah = () => {
  return (
    <div className="px-3">
      <p className="text-2xl text-olivedrab font-bold">Tambah Mata Kuliah</p>
      <div className="mt-4">
        <Label>
          <FormPlaceholder>Nama Mata Kuliah</FormPlaceholder>
          <Form type="text" />
        </Label>
        <Label>
          <FormPlaceholder>Dosen</FormPlaceholder>
          <Form type="text" />
        </Label>
        <Label className="block">
          <FormPlaceholder>Jumlah SKS</FormPlaceholder>
          <Form type="text" />
        </Label>
        <Label>
          <FormPlaceholder>Deskripsi</FormPlaceholder>
          <TextArea />
        </Label>
        <Label>
          <FormPlaceholder>Semester</FormPlaceholder>
          <SelectInput>
            <option>Genap</option>
            <option>Ganjil</option>
          </SelectInput>
        </Label>
        <Label>
          <FormPlaceholder>Tahun Ajar</FormPlaceholder>
          <SelectInput>
            <option>2020/2021</option>
            <option>2021/2022</option>
          </SelectInput>
        </Label>
      </div>
      <div className="text-center my-4">
        <button className="bg-skyblue text-whitesmoke py-2 px-5 rounded-md text-base">
          Tambah
        </button>
      </div>
    </div>
  );
};

export default TambahKuliah;
