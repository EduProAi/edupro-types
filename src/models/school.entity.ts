export interface SchoolSimple {
  id: number;
  name: string;
  cn_name: string;
  region_name?: string;
  region_cn_name?: string;
}

// the updated school entity based from database
export interface School {
  id: number;
  name?: string;
  name_cn?: string;
  description?: string;
  description_cn?: string;
  us_news_ranking?: number;
  qs_ranking?: number;
}
