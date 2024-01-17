export interface Column {
  title: string;
  links: Link[];
}

export interface Link {
  name: string;
  url: string;
  icon?: string;
}

export interface QNA {
  question: string;
  answer: string;
}
