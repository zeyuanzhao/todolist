export interface List {
  id: number;
  title: string;
  description: string;
  emoji: string;
  type: string;
}

export interface Item {
  id: number;
  listId: number;
  type: string;
  content: string;
  completed: boolean;
  created: number;
}

export interface CreateListForm {
  title: string;
  description: string;
  emoji: string;
  type: string;
}
