export const getModalSize = (size?: string): string => {
  switch (size) {
    case 'sm':
      return 'max-w-lg';
    case 'md':
      return 'max-w-6xl';
    case 'lg':
      return 'max-w-full';
    default:
      return 'max-w-lg';
  }
};

