import type { Metadata } from "next";
import { LIST_METADATA } from "@constants/metadata";
import { CommonLayout } from "@components/layout";
import { CustomErrorBoundary } from "@components/error-boundary";
import List from "@components/list/list";

export const metadata: Metadata = {
  title: LIST_METADATA.TITLE,
  description: LIST_METADATA.DESCRIPTION,
};

export default function Page() {
  return (
    <CommonLayout>
      <CustomErrorBoundary element={<List />} />
    </CommonLayout>
  );
}
