/* TypeScript file generated by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const UseMessageToastBS = require('./UseMessageToast.bs');

// tslint:disable-next-line:interface-over-type-literal
export type message = { readonly expires: number; readonly text: string };

export const hook: (_1:void) => [message[], (_1:string) => void] = function (Arg1: any) {
  const result = UseMessageToastBS.hook(Arg1);
  return [result[0].map(function _element(ArrayItem: any) { return {expires:ArrayItem[0], text:ArrayItem[1]}}), result[1]]
};
