"use client";
import { Button, Navbar } from "flowbite-react";

export default function Head() {
  return (
    <Navbar id="top" fluid rounded>
      <Navbar.Brand href="https://comingsoon07.netlify.app">
        <img
          src="https://i.ibb.co/y02CJGX/favicon.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Coming Soon"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Coming soon
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#top" active>
          Topic and Metric
        </Navbar.Link>
        <Navbar.Link href="#dataset">Dataset</Navbar.Link>
        <Navbar.Link href="#algorithm">Algo Selection</Navbar.Link>
        <Navbar.Link href="#team">Team</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
