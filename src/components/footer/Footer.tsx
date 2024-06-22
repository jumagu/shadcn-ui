import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from "../icons";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4 dark:bg-[#09090B]">
        <ul className="flex items-center flex-wrap mb-6 md:mb-0">
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6 dark:text-gray-300"
            >
              Terms and conditions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6 dark:text-gray-300"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6 dark:text-gray-300"
            >
              Licensing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6 dark:text-gray-300"
            >
              Cookie Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline dark:text-gray-300"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex sm:justify-center space-x-6">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          >
            <TwitterIcon />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          >
            <GithubIcon />
          </a>
        </div>
      </footer>

      <p className="text-center text-sm text-gray-500 my-10 dark:text-gray-300">
        &copy; 2019-{new Date().getFullYear()}{" "}
        <a href="#" className="hover:underline" target="_blank">
          Themesberg
        </a>
        . All rights reserved.
      </p>
    </>
  );
};
