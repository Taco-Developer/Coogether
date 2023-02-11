import React, { useState } from 'react';
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
// import {
//   Overlay,
//   ModalWrap,
//   CloseButton,
//   Contents,
//   Fridge,
//   Door,
//   Bottom,
//   Shelves,
//   Button,
// } from './AllMyIngredientsModalStyle';
import './AllMyIngredientsModal.scss';

function AllMyIngredientsModal({ onClose }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const handleClose = () => {
    onClose?.();
  };
  return (
    // <Overlay onClick={handleClose}>
    //   <ModalWrap oEnClick={e => e.stopPropagation()}>
    //     <CloseButton onClick={handleClose}>
    //       <CancelOutlinedIcon />
    //     </CloseButton>
    //     <Contents>
    //       <h2>랜선 냉장고</h2>
    //       <Fridge>
    //         <Door>
    //           <Bottom />
    //         </Door>
    //         <Shelves />
    //       </Fridge>
    //     </Contents>
    //     <Button>확인</Button>
    //   </ModalWrap>
    // </Overlay>
    <div className="Overlay">
      <div className="wrapper">
        <div className="fridge">
          <div className="door top" />
          <button
            aria-label="Mute volume"
            className={`door bottom ${isActive ? 'active' : ''}`}
            onClick={handleClick}
          />
          <div className="shelves" />
          {/* <div className="fly" /> */}
        </div>
      </div>
    </div>
  );
}

export default AllMyIngredientsModal;
