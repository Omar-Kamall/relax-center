import OurBranchesSection from "../components/OurBranches/OurBranchesSection";

export const metadata = {
  title: "مراكز الراحة - أفضل سبا رجالي بالرياض",
  description:
    "اكتشف عالم الاسترخاء مع أفضل خدمات المساج والحمام المغربي والعناية بالبشرة للرجال. تجربة استثنائية لراحة الجسم والروح",
  keywords:
    "مراكز الراحة، سبا رجالي، مساج، حمام مغربي، عناية بالبشرة، استرخاء، الرياض، سبا الرياض",
  openGraph: {
    title: "مراكز الراحة - أفضل سبا رجالي بالرياض",
    description:
      "اكتشف عالم الاسترخاء مع أفضل خدمات المساج والحمام المغربي والعناية بالبشرة للرجال",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <OurBranchesSection />
    </>
  );
};

export default page;
