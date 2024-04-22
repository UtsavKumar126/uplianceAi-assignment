import JoditEditor from "jodit-react";
import React, { useRef,useState,useEffect, useMemo } from "react";
import styles from "./styles.module.css"

function TextEditor() {
  const editor = useRef();
  const [content, setContent] = useState('');
  const [show,setShow]=useState(false);
  useEffect(()=>{
    document.body.style.backgroundColor='white';
    if(localStorage.getItem('editorData')){
        setContent(localStorage.getItem('editorData'))
    }
},[])

  return (
    <div className={styles.editor}>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) =>{
            setContent(newContent);
            localStorage.setItem('editorData',content)
        }}
      />
      <button className={styles.button}onClick={()=>{
        setShow(!show)
      }}>{show?'Hide':"Display"}</button>
      <button className={styles.button}onClick={()=>{
        setContent("");
        localStorage.removeItem('editorData');
      }}>Reset</button>
      {
        show&&<div>{content}</div>
      }
    </div>
  );
}

export default TextEditor;
