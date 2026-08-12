export type HomeSlideStatus =
  | "live"
  | "upcoming";

export type HomeSlideContentPosition =
  | "left"
  | "center"
  | "right";

export interface HomeSlide {
  id: string;
  status: HomeSlideStatus;
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  href: string;
  backgroundImage: string;
  backgroundPosition?: string;
  gradient?: string;
  showContent?: boolean;
  contentPosition?: HomeSlideContentPosition;
}
import MlbbImage from '@/public/images/mlbb/mlbb.jpg';
import HornorOfingImage from '@/public/images/hornorofking/hornorofking.png';
import MplCambodiaImage from '@/public/images/mplcambodia/mplcambodia.png';
export const homeSlides: HomeSlide[] = [
  {
    id: "1",
    status: "live",
    eyebrow: "Exclusive offer",
    title: "Mobile Legends: Bang Bang",
    description:
      "Explore our exclusive Mobile Legends top-up offers and enjoy seamless gaming experiences.",
    buttonText: "Explore now",
    href: "/games/mlbb",
    backgroundImage: MlbbImage.src,
    backgroundPosition: "center",
    contentPosition: "left",
    
    gradient:
      "linear-gradient(90deg, rgba(5, 12, 20, 0.9) 0%, rgba(5, 12, 20, 0.35) 48%, rgba(5, 12, 20, 0.05) 100%)",
    showContent: true,
  },
  {
    id: "2",
    status: "live",
    eyebrow: "Instant top-up",
    title: "Honor of Kings",
    description:
      "Purchase Honor of Kings tokens quickly and securely using ABA KHQR.",
    buttonText: "Top up now",
    href: "/games/honor-of-kings",
    backgroundImage: HornorOfingImage.src,
    backgroundPosition: "center",
    contentPosition: "left",
    gradient:
      "linear-gradient(90deg, rgba(4, 10, 30, 0.94) 0%, rgba(25, 40, 100, 0.42) 55%, rgba(10, 20, 60, 0.08) 100%)",
    showContent: true,
  },
  {
    id: "3",
    status: "live",
    eyebrow: "MPL Cambodia",
    title: "MPL Cambodia Tournament",
    description:
      "Follow the latest MPL Cambodia matches, teams, schedules, and tournament updates.",
    buttonText: "View tournament",
    href: "/mpl-cambodia",
    backgroundImage: MplCambodiaImage.src,
    backgroundPosition: "center",
    contentPosition: "left",
    gradient:
      "linear-gradient(90deg, rgba(5, 8, 20, 0.92) 0%, rgba(15, 25, 65, 0.4) 55%, rgba(10, 20, 60, 0.05) 100%)",
    showContent: true,
  },
];