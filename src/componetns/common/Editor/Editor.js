import React, { useState, useEffect } from 'react'; 
import styles from './Editor.module.scss'


const Editor = (props) => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");

  useEffect(()=>{
    if(headerText === "коронавирус") {
      alert("Осторожно с этим!")
    }
  }, [headerText])

useEffect(() => {
  const timer = setTimeout(() => {
    setHeaderText('Начните вводить название поста...')
  }, 10000);
  return () =>{
    clearTimeout(timer)
  }
}, [])



  return (
    <div className={styles.wrapper}>
      <main>
        <input 
        className={styles.header} 
        type="text"
        onChange={(e) => {
          setHeaderText(e.currentTarget.value)
        }}
        defaultValue={headerText}/>
        <textarea 
        className={styles.body} 
        rows={15}
        onChange={(e) => {
          setBodyText(e.currentTarget.value)
        }}></textarea>
        <div className={styles.buttons}>
          <button className={styles.btnOk}>OK</button>
          <button className={styles.btnCancel}>Cancel</button>
        </div>
      </main>
    </div>
  )
}

export default Editor;