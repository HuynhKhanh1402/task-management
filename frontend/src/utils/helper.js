export const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const addThousandsSeparator = num => {
  if (num == null || isNaN(num)) return '';

  const [integerPart, fractionalPart] = num.toString().split('.');
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return fractionalPart ? `${formattedIntegerPart}.${fractionalPart}` : formattedIntegerPart;
};
