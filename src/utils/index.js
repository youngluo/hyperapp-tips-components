export const paramProcessor = (content, options) => {
  if (!content) return;

  if (typeof content === 'object') {
    return content;
  }

  if (typeof content === 'string') {
    return { ...options, content };
  }
};
