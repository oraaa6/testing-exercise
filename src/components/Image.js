import React from "react";

const Image = ({ url, title, testID }) => (
  <li>
    <img data-testid={`image-item-${testID}`} src={url} alt={title} />
  </li>
);

export default Image;
