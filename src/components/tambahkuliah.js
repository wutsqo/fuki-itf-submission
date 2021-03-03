import React from "react";
import tw from "twin.macro";

const Form = tw.input`mt-1 px-2 block w-full border-darkslategray border rounded-md h-8`;
const Label = tw.label`block mt-2`;
const TextArea = tw.textarea`mt-1 px-2 block w-full border-darkslategray border rounded-md h-16`;
const FormPlaceholder = tw.span`text-darkslategray`;
const SelectInput = tw.select`mt-1 px-2 block w-full border-darkslategray border rounded-md h-8`;
const FormContainer = tw.div`mt-3`;
const FormTitle = tw.p`text-2xl text-olivedrab font-bold`;
const Container = tw.div`px-3 max-w-lg`;
const ButtonContainer = tw.div`text-center my-4`;
const ButtonTambahKuliah = tw.button`bg-skyblue text-whitesmoke py-2 px-5 rounded-md text-base`;

const TambahKuliah = () => {
  return (
    <Container>
      <FormTitle>Tambah Mata Kuliah</FormTitle>
      <FormContainer>
        <Label>
          <FormPlaceholder>Nama Mata Kuliah</FormPlaceholder>
          <Form type="text" />
        </Label>
        <Label>
          <FormPlaceholder>Dosen</FormPlaceholder>
          <Form type="text" />
        </Label>
        <Label>
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
      </FormContainer>
      <ButtonContainer>
        <ButtonTambahKuliah>Tambah</ButtonTambahKuliah>
      </ButtonContainer>
    </Container>
  );
};

export default TambahKuliah;
