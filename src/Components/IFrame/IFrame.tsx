import { FC } from "react";

interface iFrameAttributes {
  src: string
};

const iFrame: FC<iFrameAttributes> = ({src}) => {
  return <iframe src={src}></iframe>
};

export default iFrame;


