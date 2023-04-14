import {HeadingProperties} from "./Heading.types";

const Heading = ({step}: HeadingProperties) => {
    return(<h1>Rule #{step + 1}</h1>)
};

export default Heading;