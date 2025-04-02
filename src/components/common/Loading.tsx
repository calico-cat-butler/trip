import Image from "next/image";

export default function Loading() {
  return (
    <div className="_spinner-wrapper">
      <div className="_spinner-backdrop"></div>
      <div className="_spinner-container">
        로티 적용
      </div>
    </div>
  );
}
