import {
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
// import MenuItems from "./helper/MenuItems";
// import ButtonGroup from "./helper/ButtonGroup";
import { api } from "~/utils/api";
// import { type UserType } from "@prisma/client";
import { useSelector } from "react-redux";
import { selectUser } from "~/redux/reducers/user";

type UserData = {
  id: string;
  email: string;
  // userType: UserType;
  surveyId: string | null;
};


const Navbar = () => {

  const {userId} = useSelector(selectUser)


  // const userData =  api.user.getById.useQuery({ id: userId });

  const [active, setActive] = useState('Dashboard');

  const [isOpen, setIsOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const [data, setData] = useState<UserData | undefined>(undefined);

  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
  if(userId){
    setLoggedIn(true);
   
  }
  else {
    setLoggedIn(false);
  }

  }, [userId]);

  // useEffect(() => {
  //     if (userData && userData.isSuccess && userData.data) {
  //       setData(userData.data);
  //     }

  // }, [userData]);
  



  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white opacity-95 dark:border-nft-black-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer">
          <Image
              src={"/logo02.webp"}
              alt="logo"
              objectFit="contain"
              width={72}
              height={1}
              className={theme === "light" ? "" : theme === 'dark' ? "filter invert" : undefined}
            />
            {/* <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
            Davinchi
            </p> */}
          </div>
        </Link>

        <Link href={"/"}>
          <div className="hidden md:flex">
            <Image
              src={"/logo02.webp"}
              alt="logo"
              objectFit="contain"
              width={64}
              height={1}
              className={theme === "light" ? "" : theme === 'dark' ? "filter invert" : undefined}
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>

        <div className="md:hidden flex">
        {/* <MenuItems isMobile={false} active={active} setActive={setActive} userType={data?.userType ?? 'CLIENT'} /> */}

          <div className="ml-4">
            {/* <ButtonGroup setActive={setActive} router={router} loggedIn = {loggedIn} /> */}
          </div>
        </div>
      </div>

      <div className="hidden md:flex ml-2">
        {isOpen ? (
          <Image src="/cross.png" alt="X"
           objectFit="contain"
            width={20}
            height={20}
            onClick={() => {
              setIsOpen(false);
            }}
            className={theme === "light" ? "filter invert" : ""}
          />
        ) : (
          <Image
            src="/menu.png"
            alt="^"
            objectFit="contain"
            width={25}
            height={25}
            onClick={() => {
              setIsOpen(true);
            }}
            className={theme === "light" ? "filter invert" : ""}
          />
        )}

        {isOpen && (
          <div
          className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col"
          >
            <div className="flex-1 p-4">
            {/* <MenuItems active={active} isMobile setActive={setActive} userType={data?.userType ?? 'CLIENT'} /> */}
            </div>

            <div
            className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1"
            >
              {/* <ButtonGroup setActive={setActive} router={router} loggedIn = {loggedIn} /> */}

            </div>

          </div>
        ) }
      </div>
    </nav>
  );
};

export default Navbar;
