import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactMarkDown from 'react-markdown'

function App() {
  const [markdownText, setMarkdownText] = useState(0)

  return (
    <>
     <div>
      <h1>Markdown Reviewer</h1>
      <div className="boxes-container">
        <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
        <div id="preview">
          <ReactMarkDown>{markdownText}</ReactMarkDown>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
