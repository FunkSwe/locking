const LockingMenu = () => {
  return (
    <header className='bg-gray-900 text-white fixed w-full top-0 z-50 shadow-lg'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <ul className='flex space-x-6 py-4'>
          <li>
            <a
              href='/locking'
              className='text-lg font-semibold hover:text-gray-300'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='/locking/historia'
              className='text-lg font-semibold hover:text-gray-300'
            >
              Historia
            </a>
          </li>
          <li>
            <a
              href='/locking/gallery'
              className='text-lg font-semibold hover:text-gray-300'
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href='/locking/events'
              className='text-lg font-semibold hover:text-gray-300'
            >
              Events
            </a>
          </li>
          <li>
            <a
              href='/locking/contact'
              className='text-lg font-semibold hover:text-gray-300'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default LockingMenu;
