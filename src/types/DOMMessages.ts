export type DOMMessage = {
  type: 'GET_DOM'
}

export type DOMMessageResponse = {
  tabCount: number;
  title: string;
  headlines: string[];
}