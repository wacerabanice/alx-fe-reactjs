import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // get dynamic route param
  return <h2>Blog Post ID: {id}</h2>;
}
