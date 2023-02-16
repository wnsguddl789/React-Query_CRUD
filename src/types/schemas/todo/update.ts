import { DefaultResponse } from '@types';

export interface UpdateTodoInputs {
  title: string;
  content: string;
}

export interface UpdateTodoResponse extends DefaultResponse {
  title: string;
  content: string;
}
