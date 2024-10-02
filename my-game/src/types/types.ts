export interface Balloon {
  id: string;
  image: string;
  style: {
    top: string;
    left: string;
    animationDuration: string;
  };
  popped: boolean;
}
