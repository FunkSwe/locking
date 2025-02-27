'use client';
import React, { useState } from 'react';
import { itemVariants, previews } from './data';

import Item from './Item';
import Preview from './Preview';
import './Preview.scss';

const PreviewWrapper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='container'>
      <div className='items'>
        {previews && previews.map((preview, index) => (
          <Item
            key={index}
            index={index + 1}
            preview={preview}
            onClick={() => handleMouseEnter(index)}
          />
        ))}
      </div>
      {previews && (
        <Preview
          key={activeIndex}
          preview={previews[activeIndex]}
          variant={itemVariants[activeIndex]}
          isActive={true}
          activeIndex={activeIndex}
        />
      )}
    </div>
  );
};

export default PreviewWrapper;
