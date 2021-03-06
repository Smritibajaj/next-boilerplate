import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <ul className="flex border-b">
          <li className="-mb-px mr-1 text-blue-500">
            <Link href="/">
              <a>Home</a>
            </Link>{" "}
          </li>
          <li className="mr-1 text-blue-500">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="mr-1 text-blue-500">
            <Link href="/users">
              <a>Users List</a>
            </Link>
          </li>
          <li className="mr-1 text-blue-500">
            <Link href="/api/users">
              <a>Users API</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I am here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
