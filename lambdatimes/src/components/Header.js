import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <div style={ headerStyle }>
      <span style={ spanStyle }>SMARCH 32, 2018</span>
      <h1 style={titleHeader}>Lambda Times</h1>
      <span style={ tempStyle }>98°</span>
    </div>
  )
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderBottom: '1px solid lightgrey',
  width: '100%',
  height: '120px',
  marginTop: '44px',
  paddingBottom: '15px',
}

const spanStyle = {
  marginLeft: '25px',
  flex: '1',
}

const titleHeader = {
  fontSize: '60px',
  fontFamily: 'Didot, serif',
  fontWeight: 'bold',
  flex: '8',
  textAlign: 'center',
  color: '#000'
}

const tempStyle = {
  textAlign: 'right',
  marginRight: '25px',
  flex: '1'
}

export default Header