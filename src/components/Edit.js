import React, { useState } from "react";
import "./Edit.css";
import { postArticle } from "../api/af_backend";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  select,
} from "@material-tailwind/react";
import View from "./View";

const CATEGORY_OPTIONS = [
  { value: "Tech", text: "Tech" },
  { value: "IA", text: "IA" },
  { value: "Articulos del Hogar", text: "Articulos del Hogar" },
];

const Edit = () => {
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const post = async () => {
    const newArticle = {
      title,
      author,
      category: cat,
      body: text,
      comments: [],
      produts: [],
    };
    await postArticle(newArticle);
    emptyFields();
  };

  const emptyFields = () => {
    setAuthor("");
    setCat("");
    setText("");
    setTitle("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleCatChange = (value) => {
    console.log(value);
    setCat(value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="editContainer p-5 ml-5">
        <div id="editArea">
          <h3>Adicionar artículo</h3>
          <hr className="my-4" />
          <div className="my-7">
            <Input label="Titulo" value={title} onChange={handleTitleChange} />
          </div>

          <div className="my-7 flex justify-between gap-5">
            <Select
              label="Categoria"
              className="!h-full"
              value={cat}
              onChange={(value) => {
                handleCatChange(value);
              }}
            >
              {CATEGORY_OPTIONS.map(({ value, text }) => (
                <Option key={value} value={value}>
                  {text}
                </Option>
              ))}
            </Select>
            <Input label="Autor" value={author} onChange={handleAuthorChange} />
          </div>

          <div className="w-full">
            <Textarea
              className="h-[55vh]"
              label="Articulo"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div className="w-full flex justify-end mt-5">
            <Button onClick={post}>Guardar</Button>
          </div>
        </div>
      </div>
      <View />
    </>
  );
};

export default Edit;
