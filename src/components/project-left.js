import React from "react";
import { TechStack } from ".";

export const ProjectLeft = ({
  img,
  title,
  children,
  video,
  tech,
  website,
  source,
}) => {
  return (
    <div className="project">
      <div className={`animate--left ${img}`} />
      <div className="project__description animate--right">
        <h6 className="project__title">{title}</h6>
        <div className="project__links">
          <div>
            <div>
              <a href={website} target="_blank" rel="noopener noreferrer">
                website
              </a>
            </div>
            <div className="pin pin__left--vert" />
            <div>
              <a href={source} target="_blank" rel="noopener noreferrer">
                source
              </a>
            </div>
            {video && (
              <>
                <div className="pin pin__left--vert" />
                <div>
                  <a href={video} target="_blank" rel="noopener noreferrer">
                    video
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
        <p className="project__copy">{children}</p>
        <TechStack tech={tech} />
      </div>
    </div>
  );
};
