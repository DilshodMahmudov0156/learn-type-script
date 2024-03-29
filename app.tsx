import React from "react";

interface MyProps {
    title: string

}
const App = ({ title }: MyProps): JSX.Element => {

    return <h1>Hello World {title}</h1>;

};

export default App;