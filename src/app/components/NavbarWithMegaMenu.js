import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  CogIcon,
  ExclamationTriangleIcon,
  ChevronDoubleRightIcon,
  ArrowUpOnSquareStackIcon,
} from "@heroicons/react/24/outline";
import {
  AdjustmentsHorizontalIcon,
  Bars4Icon,
  BoltIcon,
  GlobeAmericasIcon,
  LinkIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  RssIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Alert } from "@material-tailwind/react";

const navListMenuItems = [
  {
    title: "Angiography",
    description: "Find the perfect solution for your needs.",
    icon: HeartIcon,
  },
  {
    title: "Angioplasty (PICA)",
    description: "Meet and learn about our dedication",
    icon: CogIcon,
  },
  {
    title: "Pacemaker Implantation",
    description: "Find the perfect solution for your needs.",
    icon: RssIcon,
  },
  {
    title: "Implantable Cardioverter Defibrillator",
    description: "Reach out to us for assistance or inquiries",
    icon: BoltIcon,
  },
  {
    title: "CRT-D /CRT-P Implantation",
    description: "Find the perfect solution for your needs.",
    icon: ExclamationTriangleIcon,
  },
  {
    title: "Balloon Mitral Valvotomy (PTMC)",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: ChevronDoubleRightIcon,
  },
  {
    title: "Post Bypass Angioplasties",
    description: "Find the perfect solution for your needs.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "Renal Angioplasty",
    description: "Explore limited-time deals and bundles",
    icon: ArrowUpOnSquareStackIcon,
  },
  {
    title: "CHIP Angioplasties",
    description: "Explore limited-time deals and bundles",
    icon: CogIcon,
  },
  {
    title: "ECG ECHO",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3rounded-lg">
          <div className="flex items-center justify-center rounded-lg  p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            href="#"
            variant="h6"
            color="blue-gray"
            className="font-semibold"
          >
            <ListItem
              className="flex items-center gap-2 py-2 f pr-4 text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Treatments
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="h6"
        color="blue-gray"
        className="font-semibold"
      >
        <ListItem className="flex items-center hover:text-light-blue-700 gap-2 py-2 pr-4">
          Home
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="/#About"
        variant="h6"
        color="blue-gray"
        className="font-semibold"
      >
        <ListItem className="flex items-center hover:text-light-blue-700 gap-2 py-2 pr-4">
          About
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="h6"
        color="blue-gray"
        className="font-semibold"
      >
        <ListItem className="flex items-center hover:text-light-blue-700 gap-2 py-2 pr-4">
          Videos
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/Gallery"
        variant="h6"
        color="blue-gray"
        className="font-semibold"
      >
        <ListItem className="flex items-center hover:text-light-blue-700 gap-2 py-2 pr-4">
          Gallery
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="h6"
        color="blue-gray"
        className="font-semibold"
      >
        <ListItem className="flex items-center hover:text-light-blue-700 gap-2 py-2 pr-4">
          Testimonial
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="h6"
        color="blue-gray"
        className="font-semibold"
      >
        <ListItem className="flex items-center hover:text-light-blue-700 gap-2 py-2 pr-4">
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <div className="hidden scroll-smooth duration-300 lg:flex justify-between bg-[#f8a240]">
        <div className="text-left p-4 font-semibold text-white">
          Opening Hours: Mon - Sat : 6.00 am - 9.00 pm, Sunday Closed
        </div>
        <div className="flex items-center text-right p-4 px-8 my-auto bg-blue-700">
          <img src="/mail.svg" alt="Mail Icon" className="mr-2" width="20px" />
          <a href="mailto:info@drbrijeshshrivastava.com"><span className="mr-3">info@drbrijeshshrivastava.com | </span></a>
          <img src="/phone.svg" alt="Mail Icon" className="mr-2" width="20px" />
          <a href="tel:90 960 69751">
          <span> 90 960 69751</span></a>
        </div>
      </div>
      <Navbar className="mx-auto max-w-screen-3xl px-4 py-2">
        <div className="flex items-center justify-between opacity-100 bg-white text-blue-gray-900">
          <img
            src="logo.png"
            alt="Logo Placeholder"
            className="sm:h-[25px] sm:w-[100px] md:h-[100px] md:w-[350px] md:ml-16 -py-6 contrast-100"
          />
          <div className="hidden bg-white lg:block">
            <NavList />
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse className="bg-white" open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </>
  );
}
