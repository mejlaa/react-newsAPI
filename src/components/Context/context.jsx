import React, { useState } from "react";
export const MyContext = React.createContext();

const Context = (props) => {
  const [img, setImg] = useState();
  const [title, setTitle] = useState("mirza");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <MyContext.Provider
      value={{ img, setImg, title, setTitle, desc, setDesc, author, setAuthor }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default Context;
