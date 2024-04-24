"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BlocItemType } from "./_types/bloc.type";

const checkCurrentPage = (path: string, linkName: string) => {
  let currentSegment = path.split("/")[3];
  let currentPage = path.split("/")[4];

  if (currentPage) {
    return currentPage === linkName;
  }
  return currentSegment === linkName;
};

const checkSignleOrGroupCurrentPage = (
  path: string,
  link: string,
  singleLink: string,
  singleLinkL2: string | undefined,
  groupLink: string,
  groupLinkL2: string | undefined
) => {
  let splitedPath = path.split("/");
  console.log(splitedPath);

  let currentSingleLinkL2 = splitedPath[7];
  let currentGroupLinkL2 = splitedPath[6];
  let currentGroupLink = splitedPath[4];
  const currentSingleLink = splitedPath[5];
  console.log(currentGroupLinkL2,"yaaaaaah");
  
  if (currentSingleLinkL2) {
    return currentSingleLinkL2 === singleLinkL2;
  }
  if (currentGroupLinkL2) {
    return currentGroupLinkL2 === groupLinkL2;
  }

  if (currentSingleLink && (groupLinkL2===undefined)) {
    return currentSingleLink === singleLink;
  }

  if (currentGroupLink) {
    return currentGroupLink === groupLink;
  }
  return groupLink === "" && `/${splitedPath[2]}/${splitedPath[3]}` === link;
};
const getIdFromLink = (path: string) => {
  return path.split("/")[4];
};
const getIdFromLinkL2 = (path: string) => {
  return path.split("/")[6];
};
const generateLink = (
  path: string,
  link: string,
  singleLink: string,
  singleLinkL2: string | undefined,
  groupLink: string,
  groupLinkL2: string | undefined
) => {
  if (singleLinkL2) {
    let segmentL1 = getIdFromLink(path);
    let segmentL2 = getIdFromLinkL2(path);
    return `${link}/${segmentL1}/${singleLink}/${segmentL2}/${singleLinkL2}`;
  }
  if (groupLinkL2 !== undefined) {
    let segmentL1 = getIdFromLink(path);
    let segmentL2 = getIdFromLinkL2(path);
    console.log(`${link}/${segmentL1}/${singleLink}/${groupLinkL2}`);
    return `${link}/${segmentL1}/${singleLink}/${groupLinkL2}`;
  }

  if (singleLink !== "") {
    let id = getIdFromLink(path);

    return `${link}/${id}/${singleLink}`;
  }

  if (groupLink !== "") {
    return `${link}/${groupLink}`;
  }
  if (singleLink === "" && groupLink === "") {
    return link;
  }
};
export default function MenuBlocItem({
  name,
  link,
  singleLink,
  singleLinkL2,
  groupLinkL2,
  groupLink,
}: BlocItemType) {
  const path = usePathname();
  console.log(path);
  console.log(link, singleLink, singleLinkL2, groupLinkL2, groupLink);

  let customLink = generateLink(
    path,
    link,
    singleLink,
    singleLinkL2,
    groupLink,
    groupLinkL2
  ) as string;
  let isCurrentPage = checkSignleOrGroupCurrentPage(
    path,
    link,
    singleLink,
    singleLinkL2,
    groupLink,
    groupLinkL2
  );

  return (
    <Link
      href={customLink}
      className={`text-gray-500 font-normal font-opensans hover:text-gray-600 hover:translate-x-3 transition-all duration-400 ease-out text-base tracking-wide cursor-pointer ${
        isCurrentPage && "translate-x-3 text-teltonika-900 underline hover:non"
      } `}
    >
      {name}
    </Link>
  );
}
