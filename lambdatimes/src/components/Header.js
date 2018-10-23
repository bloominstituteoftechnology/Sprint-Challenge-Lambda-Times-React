import React from 'react';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <div style={header}>
      <span style={date}>SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span style={temp}>98°</span>
    </div>
  );
};

const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderBottom: '1px solid lightgrey',
  width: '100%',
  height: '120px',
  marginTop: '44px',
  paddingBottom: '15px'
};

const date = {
  marginLeft: '25px',
  flex: '1'
};

const temp = {
  textAlign: 'right',
  marginRight: '25px',
  flex: '1'
};

export default Header;
