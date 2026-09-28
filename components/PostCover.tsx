"use client";

import { useState } from "react";

type PostCoverProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

const PostCover = ({ src, alt, className = "" }: PostCoverProps) => {
  // useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`post-cover post-cover--placeholder ${className}`}
        role="img"
        aria-label="Обкладинка недоступна"
      >
        Обкладинка недоступна
      </div>
    );
  }

  return (
    <img
      className={`post-cover ${className}`}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
};
export default PostCover;
