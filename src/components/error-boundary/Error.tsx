"use client";

import { useRouter } from "next/navigation";
import { Typography } from "@components/common";
import { useResponsive } from "@hooks";

type ErrorProps = {
  onReset?: () => void;
}

/**
 * @name Error
 * @version 1.1.0
 * @author 류창선 <zero.ryushin@bankle.co.kr>
 * @description react-error-boundary 사용 시 클라이언트 컴포넌트이어야 합니다.
 * @property {function} onReset   - 에러 초기화 함수
 */
const Error = ({ onReset }: ErrorProps) => {
  const router = useRouter();
  const [isMobile] = useResponsive();

  const goToPreviousPage = () => router.back();

  return (
    <section className="_error-page">
      <div>
        <Typography
          as="h1"
          kind={isMobile ? "error-subtitle" : "error-title"}
          isBold={true}
        >
          일시적인 오류가 발생했습니다.
        </Typography>

        <Typography
          as="h2"
          kind={isMobile ? "error-text" : "error-subtitle"}
          isBold={true}
        >
          서비스 이용에 불편을 드려 죄송합니다.<br />
          잠시 후 다시 시도해 주세요.
        </Typography>
      </div>

      <div>
        <button
          type="button"
          color="grayscale"
          onClick={goToPreviousPage}
        >
          이전 페이지로 돌아가기
        </button>

        <button
          type="button"
          color="main100"
          onClick={onReset}
        >
          새로고침
        </button>
      </div>
    </section>
  );
};

export default Error;