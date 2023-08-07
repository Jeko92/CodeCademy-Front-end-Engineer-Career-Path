import React from "react";

function MyQuote() {
  return (
    <blockquote>
      <p>Genius is one percent inspiration, ninety-nine percent perspiration</p>
      <p>
        Our greatest weakness lies in giving up. The most certain way to succeed
        is always to try just one more time.
      </p>
      <cite>
        <a
          target="_blank"
          //   href="https://en.wikipedia.org/wiki/Susan_Sontag"
          href="https://en.wikipedia.org/wiki/Thomas_Edison"
          rel="noreferrer"
        >
          Thomas Edison
        </a>
      </cite>
    </blockquote>
  );
}

export default MyQuote;
