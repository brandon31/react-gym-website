import React from 'react';
import '../App.css';

const headerStyle = {
  backgroundColor: '#f1f1f1',
  width: '14rem',
  height: '5rem',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '1rem 1rem 0rem 0rem',
  color: 'inherit',
  marginBottom: '1rem'
}

const firstPStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#1D2630'
}

const typeStyle = {
  fontSize: '.7rem',
  letterspacing: '.05rem'
}

const buttonStyle = {
  width: '10rem',
  padding: '.7rem',
  color: '#fff',
  cursor: 'pointer',
  backgroundColor: '#1D2630',
  border: 'none',
  marginTop: '1rem',
  borderRadius: '.2rem',
  fontWeight: 'bold',
  letterSpacing: '.05rem',
  fontSize: '1rem',
}

export const paragraphStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '.1rem',
  padding: '.3rem',
  margin: '.4rem',
}

const PriceTable = ({ price, type, content }) => {
    return (
        <>
          <div className="price-table">
            <header style={headerStyle} >

              <p style={firstPStyle} >{price}</p>

              <p style={typeStyle} >{type}</p>
            </header>

            <p className='para'>{content}</p>
            <button style={buttonStyle} >SUBSCRIBE</button>
          </div>
        </>
    );
}

PriceTable.defaultProps = {
  price: '$9.99',
  type: 'STANDARD',
  subscribe: 'SUBSCRIBE',
}

export default PriceTable;