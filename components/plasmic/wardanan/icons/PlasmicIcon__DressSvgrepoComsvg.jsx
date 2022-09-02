// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DressSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 250.184 250.184"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M226.202 243.116c-1.197-2.636-5.532-14.286-10.121-26.62-5.595-15.039-11.937-32.085-15.068-39.485-2.841-6.715-11.495-22.688-20.658-39.598-9.465-17.469-19.253-35.531-21.63-41.627-.234-.631-1.922-7.242 10.786-44.646 6.71-19.747 14.089-38.235 14.163-38.42l2.01-5.026L160.921.007l-4.274 30.25-31.522 14.201-31.416-14.619L89.606 0 64.843 7.687l1.983 5.016c.073.185 7.362 18.648 13.993 38.4 12.572 37.448 10.87 44.054 10.636 44.682-2.373 6.085-12.138 24.107-21.58 41.535-9.188 16.959-17.867 32.979-20.711 39.714-3.109 7.366-9.428 24.335-15.001 39.306-4.62 12.408-8.983 24.129-10.187 26.779l-3.205 7.065h208.641l-3.21-7.068z"
        }
      ></path>
    </svg>
  );
}

export default DressSvgrepoComsvgIcon;
/* prettier-ignore-end */
