import { useEffect, useRef, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { uploadFile } from "./services/api";

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const getImage = async () => {
    if(file){
      const data = new FormData();
      data.append("name",file.name);
      data.append("file",file);
      let res =  await  uploadFile(data);
      
    }
  }

  useEffect(()=>{
   getImage();
  },[file])

  return (
    <Wrapper>
      <LeftBox>
        <img
          src="https://cdn.pixabay.com/photo/2023/08/07/13/45/mailman-8175076_1280.jpg"
          height={"100%"}
          width={"100%"}
        />
      </LeftBox>
      <RightBox>
        <Box>
          <H1>Simple File Sharing!!!</H1>
          <p>Upload and share the download link.</p>
          <Button onClick={() => handleUploadClick()}>Upload</Button>
          <input type="file" ref={fileInputRef} style={{ display: "none" }} 
          onChange={(e)=> setFile(e.target.files[0])}
          />
        </Box>
      </RightBox>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const LeftBox = styled.div`
  width: 30%;
  height: 100%;
`;
const RightBox = styled.div`
  width: 70%;
  background-color: #445a6f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 600px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #445a6f;
  margin: 2.5rem;
`;
const Button = styled.button`
  width: 10rem;
  height: 2.5rem;
  border-radius: 0.4rem;
  background-color: #445a6f;
  border: none;
  color: #ffffff;
  font-size: 1.25rem;
  margin: 30px 0;
`;

// const H1 = styled.h1``;
