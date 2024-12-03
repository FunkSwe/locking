import { useState } from 'react';
import styles from './tribute.module.scss';
import PageTransition from '@/components/PageTransition';
import { cn } from '@/utils/classnames';
import { AnimatedText } from '@/components/animations/AnimatedText';

//pages
import InHeaven from './InHeaven';
import Inspirations from './Inspirations';
import Guests from './Guests';

const Tribute = () => {
  // State to keep track of active tab
  const [activeTab, setActiveTab] = useState('inHeaven');

  // Map each tab to its title and component
  const tabs = {
    inHeaven: {
      title: 'Give Props to the Pioneers',
      component: <InHeaven />,
    },
    guests: {
      title: 'All guests at funkcamp',
      component: <Guests />,
    },
    inspirations: {
      title: 'Inspirations',
      component: <Inspirations />,
    },
  };

  return (
    <div className={cn(styles.tribute, 'mb-20')}>
      <section className='px-8 md:px-60 mb-40'>
        {/* Tab buttons */}
        <div className='flex space-x-4 pb-4 my-10'>
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 border rounded-md ${activeTab === key ? 'font-bold bg-white text-black' : ''}`}
            >
              {tabs[key].title}
            </button>
          ))}
        </div>

        {/* Display active component and title */}
        <h2 className={styles.title}>{tabs[activeTab].title}</h2>
        {/*  <AnimatedText text={tabs[activeTab].title} className='px-8' /> */}
        {tabs[activeTab].component}
      </section>
    </div>
  );
};

export default PageTransition(Tribute);
