declare module 'scrollreveal' {
    interface ScrollRevealObject {
      reveal: (selector: string, options?: object) => void;
    }
  
    const ScrollReveal: () => ScrollRevealObject;
    export default ScrollReveal;
  }
  