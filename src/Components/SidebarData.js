import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: 'Home',
    icon: <AiIcons.AiFillHome />,
    href: '#home',
    cName: 'burger__text'
  },
  {
    title: 'Our Story',
    icon: <IoIcons.IoIosPaper />,
    href: '#our-story',
    cName: 'burger__text'
  },
  {
    title: 'Venue',
    icon: <BiIcons.BiChurch />,
    href: '#venue',
    cName: 'burger__text'
  },
  {
    title: 'Itinerary',
    icon: <BsIcons.BsArrow90DegRight />,
    href: '#itinerary',
    cName: 'burger__text'
  },
  {
    title: 'FAQ',
    icon: <IoIcons.IoMdHelpCircle />,
    href: '#faq',
    cName: 'burger__text'
  },
  {
    title: 'Photos',
    icon: <IoIcons.IoMdPhotos />,
    href: '#photos',
    cName: 'burger__text'
  },
];
