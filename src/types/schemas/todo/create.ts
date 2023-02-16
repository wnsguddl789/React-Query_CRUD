import { DefaultResponse } from '@types';

export interface CreateTodoInputs {
  title: string;
  content: string;
}

export interface CreateTodoResponse extends DefaultResponse {
  title: string;
  content: string;
}
