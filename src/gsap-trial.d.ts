declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}

declare module 'gsap-trial/CustomEase' {
  const CustomEase: any;
  export default CustomEase;
  export { CustomEase };
}

declare module 'gsap-trial/*' {
  const value: any;
  export default value;
  export { value };
}