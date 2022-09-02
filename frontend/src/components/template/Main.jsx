import React from "react";
import Header from "./Header";

export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content bg-purple-300 ">
            <div className="p-3 m-3 bg-purple-400 text-white rounded-md shadow-lg ">
                {props.children}
            </div>

        </main>

    </React.Fragment>