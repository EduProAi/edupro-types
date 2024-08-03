import { Client } from "./client.entity";

export type Page = {
  client_id: string | null;
  content_html: string | null;
  content_text: string | null;
  content_markdown: string | null;
  create_time: Date;
  update_time: Date;
  id: string;
  title: string | null;
  user_id: string;
  client?: Partial<Client>;
};

export interface SavePageHistoryParam {
  page_id: string;
}

export const isPageModel = (data: object): data is Page => {
  const keys = Object.keys(data);
  const test =
    !!data &&
    keys.includes("uid") &&
    keys.includes("title") &&
    keys.includes("content");
  return test;
};
