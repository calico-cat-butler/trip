"use client";

import { useRouter } from "next/navigation";
export default function Main() {
    const router = useRouter();

    return (
        <div className="_flex-center w-screen h-screen">
            <button
                type="button"
                className="_enter-button"
                onClick={()=> router.push("/list")}
            >
                문화 류씨 시랑공파 34세손 첫 여행 프로젝트 입장
            </button>
        </div>
    );
}
