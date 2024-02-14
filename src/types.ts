import { Project } from './Project';

export interface Validator {
  value: string | number;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export type Listener = (items: Project[]) => void;
