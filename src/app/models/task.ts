export class Task {
  id?: number;
  content: string;
  complete?: boolean;

  constructor(content: string) {
    this.content = content;
  }
}
