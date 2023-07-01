import axios from "axios";

const getArticles = async () => {
  try {
    const response = await axios.get("http://localhost:3001/");
    console.log(response);
    return response.data;
  } catch (err) {
    console.log("err");
  }
};

const postArticle = async (article) => {
  try {
    const res = await axios.post("http://127.0.0.1:3001/post", article);
  } catch (error) {
    console.log(error);
  }
};

const deleteArticle = async (id) => {
  try {
    await axios.delete(`http://127.0.0.1:3001/post?id=${id}`);
  } catch (e) {
    console.log(e);
  }
};

export { postArticle, getArticles, deleteArticle };
