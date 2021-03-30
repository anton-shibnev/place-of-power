import { useState } from 'react';
import { Outer, Btn, Modal, Main } from './components';
import content from './content/Content.json';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Main>
      <Outer>
        <Btn onClick={() => setIsOpen(!isOpen)}>{content.btn.label}</Btn>
        <Modal
          content={content.modal}
          show={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        />
      </Outer>
    </Main>
  );
};
