namespace DragDropApp {
  export interface Validator {
    value: string | number;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export function validate(validatableInput: Validator) {
    let isValid = true;
    if (validatableInput.required) {
      isValid = isValid && !!validatableInput.value.toString().trim().length;
    }
    if (validatableInput.minLength && typeof validatableInput.value === 'string') {
      isValid = isValid && validatableInput.value.length > validatableInput.minLength;
    }
    if (validatableInput.maxLength && typeof validatableInput.value === 'string') {
      isValid = isValid && validatableInput.value.length < validatableInput.maxLength;
    }
    if (validatableInput.min && typeof validatableInput.value === 'number') {
      isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max && typeof validatableInput.value === 'number') {
      isValid = isValid && validatableInput.value < validatableInput.max;
    }
    return isValid;
  }
}