import React from 'react'
import modulestyles from './cssmodules.module.css'
import  './CssAlternative.css'

export default () => {
  return (
    <>
    <h1>CSS Modules</h1>
    <div className={modulestyles.demo}>
        Example of how we can use css modules to refer to a particular file when we have multiple css files. 
        To make it work we need to name the css file as <b>filename.module.css</b> and import it as <b>import modulestyles from './filename.module.css'</b>. 
        Otherwise we just use this syntax: <b>import './CssAlternative.css'</b> to import css files.
    </div>
    </>
  )
}
