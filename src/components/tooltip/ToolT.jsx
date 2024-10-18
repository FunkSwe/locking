import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './tooltip.module.scss';

const MyPortal = ({ children }) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const curr = el.current;
    document.body.appendChild(curr);
    return () => {
      document.body.removeChild(curr);
    };
  }, []); // Add el.current to the dependency array

  return ReactDOM.createPortal(children, el.current);
};

const ToolT = ({ title, description, children, width = 256, space = 16 }) => {
  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState({});
  const el = useRef(null);

  const showTooltip = () => {
    const dimensions = el.current.getBoundingClientRect();
    const newStyle = { width };

    newStyle.left = dimensions.left + dimensions.width / 2 - width / 2;
    newStyle.left = Math.max(space, newStyle.left);
    newStyle.left = Math.min(
      newStyle.left,
      document.body.clientWidth - width - space
    );

    if (dimensions.top < window.innerHeight / 2) {
      newStyle.top = dimensions.top + dimensions.height + space;
    } else {
      newStyle.bottom = window.innerHeight - dimensions.top + space;
    }

    setVisible(true);
    setStyle(newStyle);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <span
      onMouseOver={showTooltip}
      onMouseOut={hideTooltip}
      className={`${styles['tooltip-trigger-text']}`}
      ref={el}
    >
      {children}
      {visible && (
        <MyPortal>
          <div className={`${styles['tooltip-body']}`} style={style}>
            <strong>{title}</strong>
            <p>{description}</p>
            <p>Click on image to read more</p>
          </div>
        </MyPortal>
      )}
    </span>
  );
};

export default ToolT;
