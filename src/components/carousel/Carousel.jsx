import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './carousel.scss';
import { myInspirations } from '@/assets/data/pageData';

const slideWidth = 30;

const _items = [...myInspirations];
const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx, activeIdx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
      filter: `grayscale(0)`,
      opacity: `1`,
    },
    product: _items[idx],
  };

  if (position === length - 1 || position === length + 1) {
    item.styles = {
      ...item.styles,
      filter: `grayscale(1)`,
      opacity: `0.4`,
    };
  }

  return item;
};

const CarouselSlideItem = ({ position, idx, activeIdx }) => {
  const item = createItem(position, idx, activeIdx);

  return (
    <li className='carousel__slide-item' style={item.styles}>
      <div className='carousel__slide-item-img-link'>
        <LazyLoadImage
          src={item.product.image}
          alt={item.product.name}
          effect='blur'
        />
      </div>
      <div className='carousel-slide-item__body'>
        <h4>{item.product.name}</h4>
        <p>{item.product.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => prev.map((_, i) => prev[(i + jump) % bigLength]));
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) =>
        prev.map((_, i) => prev[(i - jump + bigLength) % bigLength])
      );
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);
  }, [items]);

  return (
    <div className='carousel__wrap'>
      <div className='carousel__inner'>
        <button
          className='carousel__btn carousel__btn--prev'
          onClick={() => prevClick()}
        >
          <i className='carousel__btn-arrow carousel__btn-arrow--left' />
        </button>
        <div className='carousel__container'>
          <ul className='carousel__slide-list'>
            {items.map((position, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                position={position}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <button
          className='carousel__btn carousel__btn--next'
          onClick={() => nextClick()}
        >
          <i className='carousel__btn-arrow carousel__btn-arrow--right' />
        </button>
        <div className='carousel__dots'>
          {items.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
