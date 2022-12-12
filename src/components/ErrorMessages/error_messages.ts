const validations = {
  required: `é um campo obrigatório`,
  format: "está com o formato inválido",
  atLeast: (num: number) => `deve ter pelo menos ${num} caracteres`,
  exactly: (num: number) => `deve ter exatamente ${num} caracteres`,
};

export const errorMessages = {
  emailRequired: `email ${validations.required}`,
  emailFormat: `email ${validations.format}`,
  passwordRequired: `senha ${validations.required}`,

  titleRequired: `titulo ${validations.required}`,
  detailsRequired: `descrição ${validations.required}`,
};
