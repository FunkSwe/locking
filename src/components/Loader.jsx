import Locker from './locker/Locker';
const Loader = () => {
  return (
    <div className='absolute z-50 h-full w-full bg-black opacity-70 '>
      <Locker />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
