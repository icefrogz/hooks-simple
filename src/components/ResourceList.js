import { React, useEffect, useState } from "react";
import axios from "axios";
const ResourceList = ({resource}) => {
  const [resources, setResources] = useState([]);
  const fetchResource = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: response.data });
  };
  return "";
};

export default ResourceList;
