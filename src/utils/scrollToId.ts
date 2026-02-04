const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  // Use native smooth scrolling for reliable mobile anchor behavior.
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default scrollToId;
