import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */
type CallbackFuncArgs = (value:boolean)=> void

const addListener = (onFocusChange: CallbackFuncArgs) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });
  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};
addListener((isFocused) => {
  console.log({ isFocused });
  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
