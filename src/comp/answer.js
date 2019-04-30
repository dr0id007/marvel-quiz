import React from "react";

export default function answer(answer, ch) {
  console.log("answer:-", answer);
  console.log("ch:-", ch);
  if (answer === ch) {
    return true;
  } else return false;
}
