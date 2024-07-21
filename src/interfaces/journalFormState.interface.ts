export interface isValidForm {
  post: boolean;
  title: boolean;
  date: boolean;
}

interface valuesForm {
  post: string;
  title: string;
  date: string;
  tag: string;
  userId: string;
}

export interface initialStateForm {
  isValid: isValidForm;
  values: valuesForm;
  isFormReadyToSubmit: boolean;
}
