import React from 'react';
import styled from 'styled-components/macro';

const StyledPicture = styled.picture`
  display: block;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 5;
  }
`;

export const Picture = ({
  path = '',
  fileName,
  source = [],
  fileType = 'jpg',
  alt = '',
  className,
}) => {
  const sourceList = source.map((bp, index) => (
    <source
      key={index}
      media={`min-width: ${bp}px`}
      srcSet={
        require(`../static/images/${path}/${fileName}--${bp}.${fileType}`)
          .default
      }
      type={`image/${fileType}`}
    />
  ));

  return (
    <StyledPicture className={className}>
      {sourceList}
      <img
        src={
          require(`../static/images/${path}/${fileName}.${fileType}`).default
        }
        alt={alt}
      />
    </StyledPicture>
  );
};
