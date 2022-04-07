import React from 'react';

interface ControlsProps {
  page: number;
  disableNext: boolean;
  onChangePage: (newPage: number) => void;
}

const Controls: React.FC<ControlsProps> = ({ page, disableNext, onChangePage }) => {

  const handlePagechange = (type: 'p' | 'n') => {
    if (type === 'p') {
      onChangePage(-1)
    } else {
      onChangePage(1)

    }
  }
  return <div className='button-container'>
    <button disabled={page <= 1} onClick={() => handlePagechange('p')}>{`<<<`}</button>
    <button disabled={disableNext} onClick={() => handlePagechange('n')}>{'>>>'} </button>
  </div>
};

export default Controls;
