export default ({css}) => {
  const styling = {
  maxWidth: '800px',
  padding: '20px',
  textAlign: 'left'
};

  return (
    <div style={styling}>
      <h4>Example CSS Code</h4>
      <pre >
        <code>{css}</code>
      </pre>
    </div>
  );
};