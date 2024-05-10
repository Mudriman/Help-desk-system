import "./new.scss";

import React, {useState} from 'react';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { createGlobalStyle } from "styled-components";

const New = ({input, title}) => {
    
    const [file, setFile] =useState("");

    
    return (
        <div className="new">
            <div className="marginer"></div>
            <div className="newContainer">
                <div className="top">
                    <h1 className="">{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img 
                            src={
                                file 
                                    ? URL.createObjectURL(file) 
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                } 
                            alt="" 
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Фотография: <DriveFolderUploadOutlinedIcon className="icon"/>
                                </label>
                                <input 
                                    type="file" 
                                    id="file"  
                                    onChange={e => setFile(e.target.files[0])} 
                                    style={{display:"none"}}
                                />
                            </div>

                            {input.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder}/>
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default New;