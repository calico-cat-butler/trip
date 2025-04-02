import type { Metadata } from "next";
import { DETAIL_METADATA } from "@constants/metadata";
import { CommonLayout } from "@components/layout";
import { CustomErrorBoundary } from "@components/error-boundary";
import Detail from "@components/detail/detail";
export const metadata: Metadata = {
  title: DETAIL_METADATA.TITLE,
  description: DETAIL_METADATA.DESCRIPTION,
};

export default function Page() {
  return (
    <CommonLayout>
      <CustomErrorBoundary element={<Detail />} />
    </CommonLayout>
  );
}
