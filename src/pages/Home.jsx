import { useState } from 'react';
import { Outer } from '../components';
import { Btn } from '../components';
import { Modal } from '../components';

import content from '../content/HomePageContent.json';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Outer>
      <Btn onClick={() => setIsOpen(!isOpen)}>{content.btn.label}</Btn>
      <Modal
        content={content.modal}
        show={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      />
    </Outer>
  );
};

export default Home;
