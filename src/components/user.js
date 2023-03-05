import React from "react";
class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet: "Earth"
        };
        console.log("I am From constructor");
    }

    componentDidMount() {
        this.setState({ planet: "Jupiter" })
        console.log("I am From componentDidMount");
    }

    shouldComponentUpdate(nextProp, nextState) {
        console.log("I am shouldComponentUpdate");
        console.log({
            nextProp,
            nextState
        });
        return true
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("I am from getSnapshotUpdate");
        console.log({
            prevProp,
            prevState
        });
        return true;
    }

    componentDidUpdate() {
        console.log("I am from componentDidUpdate", this.state);
    }

    render() {  // logic
        console.log("I am From rendered");
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet}</h4>
            </div>
        );
    }
}



// const User = (props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.description}</p>
//         </div>

//     );
// };

export default User;