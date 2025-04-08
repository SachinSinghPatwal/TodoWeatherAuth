import { setTheme } from "../../Store/Slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ThemeToggler() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.SingleSourceOfTruthSlice.theme);
  return (
    <button
      className="px-2 hover:cursor-pointer"
      onClick={() => {
        dispatch(setTheme(!theme));
      }}
    >
      {!theme ? (
        <svg
          width="20px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6C9.99965 7.40007 10.3667 8.77571 11.0646 9.98947C11.7624 11.2032 12.7666 12.2126 13.9767 12.9167C15.1868 13.6208 16.5605 13.995 17.9606 14.0019C19.3606 14.0088 20.738 13.6482 21.955 12.956C21.474 18.03 17.2 22 12 22C6.477 22 2 17.523 2 12C2 6.8 5.97 2.526 11.044 2.045C10.3574 3.24988 9.99754 4.61323 10 6ZM4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C13.4136 20.0005 14.8021 19.6265 16.0241 18.916C17.2462 18.2054 18.2582 17.1838 18.957 15.955C18.6403 15.985 18.3213 16 18 16C12.477 16 8 11.523 8 6C8 5.67933 8.015 5.36033 8.045 5.043C6.81623 5.74185 5.79458 6.75381 5.08404 7.97585C4.37351 9.1979 3.99947 10.5864 4 12ZM18.164 2.291L19 2.5V3.5L18.164 3.709C17.8124 3.79693 17.4913 3.97875 17.235 4.23503C16.9788 4.4913 16.7969 4.8124 16.709 5.164L16.5 6H15.5L15.291 5.164C15.2031 4.8124 15.0212 4.4913 14.765 4.23503C14.5087 3.97875 14.1876 3.79693 13.836 3.709L13 3.5V2.5L13.836 2.291C14.1874 2.20291 14.5083 2.02102 14.7644 1.76475C15.0205 1.50849 15.2021 1.18748 15.29 0.836L15.5 0H16.5L16.709 0.836C16.7969 1.1876 16.9788 1.5087 17.235 1.76497C17.4913 2.02125 17.8124 2.20307 18.164 2.291ZM23.164 7.291L24 7.5V8.5L23.164 8.709C22.8124 8.79693 22.4913 8.97875 22.235 9.23503C21.9788 9.4913 21.7969 9.8124 21.709 10.164L21.5 11H20.5L20.291 10.164C20.2031 9.8124 20.0212 9.4913 19.765 9.23503C19.5087 8.97875 19.1876 8.79693 18.836 8.709L18 8.5V7.5L18.836 7.291C19.1876 7.20307 19.5087 7.02125 19.765 6.76497C20.0212 6.5087 20.2031 6.1876 20.291 5.836L20.5 5H21.5L21.709 5.836C21.7969 6.1876 21.9788 6.5087 22.235 6.76497C22.4913 7.02125 22.8124 7.20307 23.164 7.291Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_5_3871)">
            <path
              d="M11.25 3.75V1.5C11.25 1.30109 11.329 1.11032 11.4697 0.96967C11.6103 0.829018 11.8011 0.75 12 0.75C12.1989 0.75 12.3897 0.829018 12.5303 0.96967C12.671 1.11032 12.75 1.30109 12.75 1.5V3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5C11.8011 4.5 11.6103 4.42098 11.4697 4.28033C11.329 4.13968 11.25 3.94891 11.25 3.75ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66557 17.6532 8.59647 17.0818 7.75736 16.2426C6.91824 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45672 9.7039C6.91085 8.60754 7.67988 7.67047 8.66658 7.01118C9.65327 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12ZM16.5 12C16.5 11.11 16.2361 10.24 15.7416 9.49993C15.2471 8.75991 14.5443 8.18314 13.7221 7.84254C12.8998 7.50195 11.995 7.41283 11.1221 7.58647C10.2492 7.7601 9.44736 8.18868 8.81802 8.81802C8.18868 9.44736 7.7601 10.2492 7.58647 11.1221C7.41283 11.995 7.50195 12.8998 7.84254 13.7221C8.18314 14.5443 8.75991 15.2471 9.49993 15.7416C10.24 16.2361 11.11 16.5 12 16.5C13.1931 16.4988 14.337 16.0243 15.1806 15.1806C16.0243 14.337 16.4988 13.1931 16.5 12ZM5.46938 6.53063C5.61011 6.67136 5.80098 6.75042 6 6.75042C6.19902 6.75042 6.38989 6.67136 6.53062 6.53062C6.67136 6.38989 6.75042 6.19902 6.75042 6C6.75042 5.80098 6.67136 5.61011 6.53063 5.46938L5.03062 3.96938C4.88989 3.82864 4.69902 3.74958 4.5 3.74958C4.30098 3.74958 4.11011 3.82864 3.96938 3.96938C3.82864 4.11011 3.74958 4.30098 3.74958 4.5C3.74958 4.69902 3.82864 4.88989 3.96938 5.03062L5.46938 6.53063ZM5.46938 17.4694L3.96938 18.9694C3.82864 19.1101 3.74958 19.301 3.74958 19.5C3.74958 19.699 3.82864 19.8899 3.96938 20.0306C4.11011 20.1714 4.30098 20.2504 4.5 20.2504C4.69902 20.2504 4.88989 20.1714 5.03062 20.0306L6.53063 18.5306C6.60031 18.4609 6.65558 18.3782 6.6933 18.2872C6.73101 18.1961 6.75042 18.0985 6.75042 18C6.75042 17.9015 6.73101 17.8039 6.6933 17.7128C6.65558 17.6218 6.60031 17.5391 6.53063 17.4694C6.46094 17.3997 6.37822 17.3444 6.28717 17.3067C6.19613 17.269 6.09855 17.2496 6 17.2496C5.90145 17.2496 5.80387 17.269 5.71283 17.3067C5.62178 17.3444 5.53906 17.3997 5.46938 17.4694ZM18 6.75C18.0985 6.75008 18.1961 6.73074 18.2871 6.6931C18.3782 6.65546 18.4609 6.60025 18.5306 6.53063L20.0306 5.03062C20.1714 4.88989 20.2504 4.69902 20.2504 4.5C20.2504 4.30098 20.1714 4.11011 20.0306 3.96938C19.8899 3.82864 19.699 3.74958 19.5 3.74958C19.301 3.74958 19.1101 3.82864 18.9694 3.96938L17.4694 5.46938C17.3644 5.57427 17.2928 5.70796 17.2639 5.85352C17.2349 5.99908 17.2497 6.14998 17.3065 6.28709C17.3633 6.42421 17.4596 6.54139 17.583 6.62379C17.7065 6.70619 17.8516 6.75012 18 6.75ZM18.5306 17.4694C18.3899 17.3286 18.199 17.2496 18 17.2496C17.801 17.2496 17.6101 17.3286 17.4694 17.4694C17.3286 17.6101 17.2496 17.801 17.2496 18C17.2496 18.199 17.3286 18.3899 17.4694 18.5306L18.9694 20.0306C19.0391 20.1003 19.1218 20.1556 19.2128 20.1933C19.3039 20.231 19.4015 20.2504 19.5 20.2504C19.5985 20.2504 19.6961 20.231 19.7872 20.1933C19.8782 20.1556 19.9609 20.1003 20.0306 20.0306C20.1003 19.9609 20.1556 19.8782 20.1933 19.7872C20.231 19.6961 20.2504 19.5985 20.2504 19.5C20.2504 19.4015 20.231 19.3039 20.1933 19.2128C20.1556 19.1218 20.1003 19.0391 20.0306 18.9694L18.5306 17.4694ZM4.5 12C4.5 11.8011 4.42098 11.6103 4.28033 11.4697C4.13968 11.329 3.94891 11.25 3.75 11.25H1.5C1.30109 11.25 1.11032 11.329 0.96967 11.4697C0.829018 11.6103 0.75 11.8011 0.75 12C0.75 12.1989 0.829018 12.3897 0.96967 12.5303C1.11032 12.671 1.30109 12.75 1.5 12.75H3.75C3.94891 12.75 4.13968 12.671 4.28033 12.5303C4.42098 12.3897 4.5 12.1989 4.5 12ZM12 19.5C11.8011 19.5 11.6103 19.579 11.4697 19.7197C11.329 19.8603 11.25 20.0511 11.25 20.25V22.5C11.25 22.6989 11.329 22.8897 11.4697 23.0303C11.6103 23.171 11.8011 23.25 12 23.25C12.1989 23.25 12.3897 23.171 12.5303 23.0303C12.671 22.8897 12.75 22.6989 12.75 22.5V20.25C12.75 20.0511 12.671 19.8603 12.5303 19.7197C12.3897 19.579 12.1989 19.5 12 19.5ZM22.5 11.25H20.25C20.0511 11.25 19.8603 11.329 19.7197 11.4697C19.579 11.6103 19.5 11.8011 19.5 12C19.5 12.1989 19.579 12.3897 19.7197 12.5303C19.8603 12.671 20.0511 12.75 20.25 12.75H22.5C22.6989 12.75 22.8897 12.671 23.0303 12.5303C23.171 12.3897 23.25 12.1989 23.25 12C23.25 11.8011 23.171 11.6103 23.0303 11.4697C22.8897 11.329 22.6989 11.25 22.5 11.25Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_3871">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
}

export default ThemeToggler;
