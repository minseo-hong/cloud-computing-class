export interface Work {
  slug: string;
  name: string;
  koName: string;
  members: string[];
  memberPartList: string[];
  teamType: 'OB' | 'YB' | 'COMPANY';
  teamName: string;
  description: {
    simple: string;
    detail: string;
  };
  image: {
    src: string;
  };
  link?: {
    web?: string;
    android?: string;
    ios?: string;
    instagram?: string;
    blog?: string;
    github?: string;
    recruit?: string;
  };
}
