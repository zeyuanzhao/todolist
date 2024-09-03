export interface List {
  id: number;
  title: string;
  description: string;
  emoji: string;
  type: string;
  length: number;
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

export interface CreateItemForm {
  type: string;
  content: string;
}
