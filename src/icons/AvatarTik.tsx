// @flow
import { ClassNames } from "@emotion/react";
import * as React from "react";
type Props = {
    className?: string
};
export const AvatarTik = ({className}: Props) => {
  return (
    <div className={className}>

    
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="white" />
      <g clip-path="url(#clip0_1785_2136)">
        <path
          d="M12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0ZM6.37 11.61C6.6041 11.3779 6.92038 11.2478 7.25 11.2478C7.57962 11.2478 7.8959 11.3779 8.13 11.61L10.5 13.97L15.87 8.62C16.1097 8.42148 16.4149 8.31955 16.7258 8.33414C17.0367 8.34873 17.331 8.47879 17.5511 8.69888C17.7712 8.91897 17.9013 9.21326 17.9159 9.52418C17.9305 9.83509 17.8285 10.1403 17.63 10.38L10.5 17.5L6.37 13.37C6.13795 13.1359 6.00775 12.8196 6.00775 12.49C6.00775 12.1604 6.13795 11.8441 6.37 11.61Z"
          fill="#E60023"
        />
      </g>
      <defs>
        <clipPath id="clip0_1785_2136">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
    </div>
  );
};