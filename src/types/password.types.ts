export type PasswordCondition = {
  label: string;
  validate: (password: string) => boolean;
};

export type PasswordValidationResult = {
  label: PasswordCondition['label'];
  isFulfilled: boolean;
};
