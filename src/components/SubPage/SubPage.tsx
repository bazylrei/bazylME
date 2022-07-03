import React, { Component } from "react";

const SubPage = (props: {title: string}) =>  {
    return (
        <div>
        <h1>
            Welcome to {props.title}
        </h1>
        </div>);
}

export default SubPage;