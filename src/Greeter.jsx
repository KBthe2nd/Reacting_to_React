import React from "react";



const Greeter = prop => {
    return (
        <div>
            <h1>
                My name is {prop.name}, {prop.phrase}.
            </h1>
        </div>
    );
}
export default Greeter