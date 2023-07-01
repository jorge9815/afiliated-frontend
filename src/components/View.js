import React, { useState } from "react";
import { Card, Typography, IconButton } from "@material-tailwind/react";
import { getArticles, deleteArticle } from "../api/af_backend";

const TABLE_HEAD = ["Title", "author", "category", ""];

const View = () => {
  const [articles, setArticles] = useState([]);

  const refresh = async () => {
    const data = await getArticles();
    setArticles(data);
  };

  const deleteA = async (key) => {
    await deleteArticle(key);
    await refresh();
  };

  return (
    <Card className="overflow-scroll w-full mx-5 mt-8 border border-2 rounded-md">
      <h3 className="p-7">Listado de Articulos</h3>
      <img
        src={require("../icons/reload.png")}
        className="w-8"
        onClick={refresh}
      />
      <hr className="mb-7" />
      <table className="w-[95%] table-auto text-left mx-auto">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => {
            const isLast = index === articles.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            console.log(article._id);
            return (
              <tr key={article._id}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {article.title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {article.author}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {article.category}
                  </Typography>
                </td>
                <td className={classes + "w-12"}>
                  <div className="flex justify-between w-full flex-rows">
                    <img
                      // key={article._id}
                      src={require("../icons/view.png")}
                      className="w-8"
                      onClick={refresh}
                    />
                    <img
                      // key={article._id}
                      src={require("../icons/edit.png")}
                      className="w-8"
                      onClick={refresh}
                    />
                    <img
                      // key={article._id}
                      src={require("../icons/delete.png")}
                      className="w-8"
                      onClick={() => deleteA(article._id)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default View;
