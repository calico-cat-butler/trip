import Link from "next/link";
import Image from "next/image";
import { MapIcon, MoneyIcon } from "@icons";

type MetadataProps = {
    title: string;
    path: string;
    location: string;
    price: string;
};

type SummaryProps = {
    summary: string[];
}

// @ts-ignore
export default function Section({title, path, location, price, summary}: MetadataProps&SummaryProps) {

    return (
        <section className="flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-2">
                <h1 className="mb-2 text-4xl md:text-5xl font-bold">{title}</h1>
                <h2 className="flex items-center gap-x-2 text-base md:text-lg">
                    <span className="basis-[30px]">
                        <Image src={MapIcon} alt="위치 아이콘" width={30} height={30} />
                    </span>
                    <span>{location}</span>
                </h2>
                <h3 className="flex items-center gap-x-2 text-base md:text-lg">
                     <span className="basis-[30px]">
                        <Image src={MoneyIcon} alt="비용 아이콘" width={30} height={30} />
                     </span>
                    <span>{price}</span>
                </h3>
            </div>

            <ul className="flex flex-col gap-y-2">
                {summary.map((item: string) => {
                    return (
                        <li key={item} className="text-base md:text-lg">- {item}</li>
                    );
                })}
            </ul>

            <div className="text-center">
                <Link href={path} className="_enter-button" target="_blank">숙소 구경하기</Link>
            </div>
        </section>
    );
}
