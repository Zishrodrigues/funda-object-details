const objectIds = [
  'fde24766-9268-4be1-a570-89fd6f481fc5',
  'd8b3dde1-d67a-45ca-ae01-b88de0eac7c2',
  '70272dba-630c-4a72-b499-ffe6ad6e9055',
  'e4a9f0b2-9bc8-4d13-a835-b017bfa5aece'
];

export const checkIfImageUrl = (url) => {
  if (!url) return false;
  return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
};

export const filterMediaForImages = (media) => {
  const imageIndex = { // using a named variable to avoid 'magic numbers'
    small: 0,
    medium: 1,
    large: 2,
    largest: 3
  };
  const mappedImages = media.map((media) => {
    if (!checkIfImageUrl(media.MediaItems[0].Url)) return null; // want to make sure the url matches an image filetype
    return {
      small: media.MediaItems[imageIndex.small].Url,
      medium: media.MediaItems[imageIndex.medium].Url,
      large: media.MediaItems[imageIndex.large].Url,
      largest: media.MediaItems[imageIndex.largest].Url
    };
  }).filter(img => img); // filter out predetermined null(non image url) values
  return mappedImages;
};

export const formatPrice = (price) => {
  if (!price) return '';
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price);
};

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

export const getRandomObjectId = (currentId) => {
  const randomIndex = getRandomNumber(objectIds.length);
  const randomId = objectIds[randomIndex];
  if (randomId === currentId) {
    return getRandomObjectId(currentId); // Using recursion to make sure the next ID doesn't match the current one
  }
  return randomId;
};
