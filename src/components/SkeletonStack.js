import SkeletonCard from "./SkeletonCard";

const SkeletonStack = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      <SkeletonCard></SkeletonCard>
      <SkeletonCard></SkeletonCard>
      <SkeletonCard></SkeletonCard>
      <SkeletonCard></SkeletonCard>
      <SkeletonCard></SkeletonCard>
      <SkeletonCard></SkeletonCard>
    </div>
  );
};

export default SkeletonStack;
