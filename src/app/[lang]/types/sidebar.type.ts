import { IconType } from "react-icons";
// /lang/role/segment/groupLink/signleLink/groupLinkL2/signleLinkL2
//or: /lang/role/segment/signleLink/groupLinkL2
//or: /lang/role/segment/signleLink/groupLinkL2/signleLinkL2

export type BlocItemType = {
  name: string;
  groupLink: string;
  groupLinkL2?: string;
  singleLink: string;
  singleLinkL2?: string;
  link: string;
};
export type BlocType = {
  Icon: IconType;
  title: string;
  items: BlocItemType[];
};
