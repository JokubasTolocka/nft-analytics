import { useState } from 'react';

interface DescriptionBoxType {
  description: string;
}

const DescriptionBox = ({ description }: DescriptionBoxType) => {
  const [formattedDescription, setFormattedDescription] = useState(description.slice(0, 150));

  const isFormatted = formattedDescription.length !== description.length;

  const formatDescription = () => setFormattedDescription(isFormatted ? description : description.slice(0, 150));

  return (
    <div className="flex flex-col space-y-2">
      <span className="max-w-[364px]">
        {formattedDescription}
        {isFormatted && '...'}
      </span>
      <span className="font-medium cursor-pointer !ml-0" onClick={formatDescription}>
        {isFormatted ? 'See more' : 'See less'}
      </span>
    </div>
  );
};

export default DescriptionBox;
