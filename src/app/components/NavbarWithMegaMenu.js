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

const navListMenuItems = [
  {
    title: "Angiography",
    description: "Angiography is a type of X-ray used to check blood vessels. Blood vessels do not show clearly on a normal X-ray, so a special dye called a contrast agent needs to be injected into your blood first.This highlights your blood vessels, allowing your doctor to see any problems.",
    icon: HeartIcon,
  },
  {
    title: "Angioplasty (PICA)",
    description: "Angioplasty is a procedure used to open blocked coronary arteries caused by coronary artery disease. It restores blood flow to the heart muscle without open-heart surgery. Angioplasty can be done in an emergency setting, such as a heart attack",
    icon: CogIcon,
  },
  {
    title: "Pacemaker Implantation",
    description: "We utilize the latest advancements in cardiac technology to ensure the highest level of precision and efficacy during placemaker implantation procedures. Our state-of-the-art equipment and implantable devices are designed to deliver reliable and consistent performance, providing patients with the peace of mind they deserve.",
    icon: RssIcon,
  },
  {
    title: "Implantable Cardioverter Defibrillator",
    description: "We prioritize the comfort and well-being of our patients throughout their ICD implantation journey. From thorough pre-procedural assessments to comprehensive post-implantation support and education, our team is dedicated to providing compassionate care and empowering patients to manage their cardiac health effectively.",
    icon: BoltIcon,
  },
  {
    title: "CRT-D /CRT-P Implantation",
    description: "Discover refined cardiac support through our state-of-the-art CRT-D/CRT-P implantation services. Our seasoned specialists deliver tailored care to optimize cardiac function and enhance the quality of life for those grappling with heart failure and conduction anomalies. Reach out to us for further insights.",
    icon: ExclamationTriangleIcon,
  },
  {
    title: "Balloon Mitral Valvotomy (PTMC)",
    description: "Embark on a journey of compassionate cardiac care with our Balloon Mitral Valvotomy (PTMC) services. We offer a personalized approach aimed at restoring mitral valve function and nurturing overall cardiac well-being. Reach out to us today to begin your path towards improved heart health with understanding and support.",
    icon: ChevronDoubleRightIcon,
  },
  {
    title: "Post Bypass Angioplasties",
    description: "Explore the specialized care of our Post Bypass Angioplasty treatment, to guiding your recovery journey with precision and compassion. From personalized support to vigilant monitoring, we are committed to nurturing your cardiac well-being. Take the next step towards a revitalized heart by connecting with us today for unparalleled expertise and care.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "Renal Angioplasty",
    description: "We offer meticulous evaluation and tailored interventions aimed at optimizing renal function. With an emphasis on medical precision and cutting-edge techniques, our Renal Angioplasty treatment ensures comprehensive management for each patient's specific renal health needs.",
    icon: ArrowUpOnSquareStackIcon,
  },
  {
    title: "CHIP Angioplasties",
    description: "With a focus on precision and innovation, our CHIP Angioplasty treatment ensures thorough management and optimal outcomes for your heart's well-being. Experience the difference in cardiac care, where excellence meets innovation to safeguard your heart's health.",
    icon: CogIcon,
  },
  {
    title: "ECG ECHO",
    description: "We offer comprehensive evaluations utilizing state-of-the-art technology to unveil insights into cardiac function and rhythm. Experience the precision of medical diagnostics as we delve into the intricacies of your heart health, guiding you towards informed decisions and optimal wellness.",
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
      {/* <Typography
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
      </Typography> */}
      <Typography
        as="a"
        href="#testimonials"
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
        href="#footer"
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
          <a href="mailto:brijshri@gmail.com"><span className="mr-3">brijshri@gmail.com | </span></a>
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
            className="sm:h-[10px] sm:w-[40px] md:h-[50px] md:w-[175px] md:ml-16 -py-6 contrast-100"
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
