import React from "react";
import Header from "./Header.tsx";

interface MainProps {
  title: string;
  icon: () => void;
  subtitle: string;
  children?: any;
}

const Main = (props: MainProps) => {
  return (
    <React.Fragment>
      <Header title={props.title} icon={props.icon} subtitle={props.subtitle} />
      <main className="content bg-purple-300 ">
        <div className="p-3 m-3 bg-purple-400 text-white rounded-md shadow-lg ">
          {props.children}
        </div>
      </main>
    </React.Fragment>
  );
};
export default Main;
