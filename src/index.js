import { useIntersectionObserver } from "./useIntersectionObserver";

export default function vumate(selectors, options = {}) {
  return useIntersectionObserver(selectors, options);
}
