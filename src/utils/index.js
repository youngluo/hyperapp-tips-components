export const paramProcessor = (content, options) => {
  if (typeof content === 'object') {
    return content;
  }

  return { ...options, content };
};
