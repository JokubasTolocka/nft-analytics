import { useState } from 'react';

interface DescriptionBoxType {
  description: string;
}

const CHAR_LIMIT = 150;

const DescriptionBox = ({ description }: DescriptionBoxType) => {
  const [formattedDescription, setFormattedDescription] = useState(description.slice(0, CHAR_LIMIT));

  const isFormatted = formattedDescription.length !== description.length;

  const formatDescription = () => setFormattedDescription(isFormatted ? description : description.slice(0, CHAR_LIMIT));

  return (
    <div className="flex flex-col space-y-2">
      <span className="max-w-[364px]">
        {formattedDescription}
        {isFormatted && '...'}
      </span>
      {description.length >= CHAR_LIMIT && (
        <span className="font-medium cursor-pointer !ml-0" onClick={formatDescription}>
          {isFormatted ? 'See more' : 'See less'}
        </span>
      )}
    </div>
  );
};

export default DescriptionBox;
