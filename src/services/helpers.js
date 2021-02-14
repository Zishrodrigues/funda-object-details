export const checkIfImageUrl = (url) => {
  if (!url) return false;
  return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
};

export const filterMediaForImages = (media) => {
  const imageIndex = { // using a named variable to avoid 'magic numbers'
    small: 0,
    medium: 1,
    large: 2
  };
  const mappedImages = media.map((media) => {
    if (!checkIfImageUrl(media.MediaItems[0].Url)) return null; // want to make sure the url matches an image filetype
    return {
      small: media.MediaItems[imageIndex.small].Url,
      medium: media.MediaItems[imageIndex.medium].Url,
      large: media.MediaItems[imageIndex.large].Url
    };
  }).filter(img => img); // filter out predetermined null(non image url) values
  return mappedImages;
};

export const formatPrice = (price) => {
  if (!price) return '';
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price);
};
