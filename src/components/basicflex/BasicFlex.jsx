import './BasicFlex.css'
export default ()=>{
  return (
    <>
    <h2>Basic Flex box settings</h2>
        <h3>Basic row based settings</h3>
    <p>Container has only the <code>display: flex</code> setting. If we resize the browser window we see how the flex items resize ass well up til their set size.</p>
    <p><code>flex-flow</code> is a shorthand notation for <code>flex-direction</code> and <code>flex-wrap</code> the default values are <code>row</code> and <code>no-wrap</code> meaning the flex box has a single row</p>
    <p>Axis: Main-axis and Cross-axis: Main-axis is horizontal when flex-diretion is set to row (default value)</p>
    <p><code>justify-content: means we style along main axis. Flex-start is default setting</code></p>
    <p>If we add  </p>
    <p><code>align-itmes: </code> is the same but for the cross-axis</p>
    <p><code>align-content: </code> is for the cross-axis but only when multirow container (e.g wrap instead of no-wrap setting)</p>
    <div className="basic-flex-container">
      <div className="basic-flex-item basic-flex-item1">Box type 1</div>
      <div className="basic-flex-item basic-flex-item2">Box type 2</div>
      <div className="basic-flex-item basic-flex-item3">Box type 3</div> 
    </div>
    </>
  )
}