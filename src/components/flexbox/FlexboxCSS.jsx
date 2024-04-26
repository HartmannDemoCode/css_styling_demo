import React, {useState, useEffect} from "react";
import "./Flexbox.css";
import CssCodeExample from "../CssCodeViewer";

//
function Flexbox(props) {
  const [classNumber, setClassNumber] = useState(1);

  useEffect(() => {
    document.querySelector(".parent-box").className = "parent-box";
    document.querySelector(".parent-box").classList.add("type" + classNumber);
  }
  , [classNumber]);
  return (
    <>
      <h1>Flexbox Demo</h1>
      <p>Link to{" "} <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-background"> Tutorial </a></p>
      <p>
        The main idea behind the flex layout is to give the container the
        ability to alter its items’ width/height (and order) to best fill the
        available space (mostly to accommodate to all kind of display devices
        and screen sizes). A flex container expands items to fill available free
        space or shrinks them to prevent overflow.
      </p>
      <p>
        Flexbox layout is most appropriate to the components of an
        application, and small-scale layouts, while the Grid layout is
        intended for larger scale layouts.{" "}
      </p>
      <div className="flexbox">
        <p>
         Position item with flexbox rows.
        </p>
        <div className="wrapper">
          <div>div 1</div>
          <div>div 2</div>
          <div>div 3</div>
          <div>div 4</div>
          <div>div 5</div>{" "}
        </div>
        <p>
          By default, flex items will all try to fit onto one line. We can
          change that and allow the items to wrap as needed with this property:{" "}
          <code>
            flex-wrap: nowrap | wrap | wrap-reverse; (default is no-wrap)
          </code>
          These items are sharing the available space and not lining up
          underneath the items above. This is because when you wrap flex items,
          each new row (or column when working by column) is an independent flex
          line in the flex container. Space distribution happens across the flex
          line.
        </p>
        <p>
          {" "}
          Short hand notation: <code>flex-flow: column wrap</code>{" "}
        </p>
        <CssCodeExample
          css={`
            .cssgrid .wrapper {
              /* Parent Container with 'display: flex'  It enables a flex context for all its direct children */
              width: 500px;
              border: 1px solid black;
              display: flex; /* or inline-flex */
              /*flex-direction: row | row-reverse | column | column-reverse; (default row) */
              flex-wrap: wrap;
            }
            .cssgrid .wrapper > div {
              /* The elements to be positioned inside the parent */
              flex: 1 1 150px;
              background-color: lightblue;
              border: 1px solid white;
            }
          `}
        />
      </div>
      <h4>Distribution</h4>
      <p>
        Alignment along the main axis. It helps distribute extra free space
        leftover when either all the flex items on a line are inflexible, or are
        flexible but have reached their maximum size
      </p>
      <code>
        justify-content: flex-start | flex-end | center | space-between |
        space-around | space-evenly | start | end | left | right ... + safe |
        unsafe;
      </code>
      <h4>Perfect Center items</h4>
      <div className="centerexample-parent">
        <div className="centerexample-child"></div>
      </div>
      <CssCodeExample
        css={`
          .centerexample-parent {
            display: flex;
            height: 100px; /* Or whatever */
            border: 1px solid black;
            width: 500px;
          }

          .centerexample-child {
            width: 100px; /* Or whatever */
            height: 20px; /* Or whatever */
            margin: auto; /* Magic! */
            border: 2px solid red;
          }
        `}
      />
      <hr style={{color:"cyan"}}/>
      <h2>Playground</h2>
      Play around with parent flexbox properties:
      <ol>
        <li><pre>display: flex</pre> - This is the mandatory start property</li>
        <li><pre>flex-flow: row|column|row-reverse|column-reverse no-wrap|wrap|wrap-reverse</pre></li>
        <li><pre>justify-content: flex-start|flex-end|center|space-between|space-around|space-evenly</pre></li>
        <li><pre>align-items: stretch|flex-start|flex-end|center|baseline</pre></li>
        <li><pre>align-content: normal|flex-start|flex-end|center|stretch|space-between|space-around</pre> - Only works when <code>flex-flow</code> ist set to wrap</li>
      </ol>

      <div className="cssviewer">
        <div className="button-panel">
          <button onClick={()=>setClassNumber(1)}>None</button>
          <button onClick={()=>setClassNumber(2)}>column no-wrap</button>
          <button onClick={()=>setClassNumber(3)}>column wrap</button>
          <button onClick={()=>setClassNumber(3)}>row wrap-reverse</button>
          <button onClick={()=>setClassNumber(4)}>justify-content space-between</button>
          <button onClick={()=>setClassNumber(6)}>justify center</button>
          <button onClick={()=>setClassNumber(7)}>align-items</button>
          <button onClick={()=>setClassNumber(8)}>align-items baseline</button>
          <button onClick={()=>setClassNumber(9)}>align-content center</button>
          <button onClick={()=>setClassNumber(10)}>align-content strecth</button>

        </div>
        <div>test</div>
        <div className="parent-box">
          <div className="type1 element-box">Box type 1</div>
          <div className="type2 element-box">Box type 2</div>
          <div className="type3 element-box">Box type 3</div> 
          <div className="type1 element-box">Box type 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur perferendis similique totam cum molestias pariatur. Ipsam neque placeat commodi velit?</div>
          <div className="type3 element-box">Box type 3</div>
          <div className="type4 element-box">Box type 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia possimus quo libero, ipsum porro dolore ducimus sapiente amet nihil dicta exercitationem fuga rerum. Molestias.</div>
        </div>
      </div>
      
    </>
  );
}

Flexbox.propTypes = {};

export default Flexbox;
