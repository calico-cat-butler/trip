import Link from "next/link";
import Image from "next/image";

type SectionProps = {
    id: string;
    title: string;
    subtitle: string;
    path: string;
    src: string;
}

export default function Section({id, title, subtitle, path, src}: SectionProps) {

    return (
        <section
            className="relative overflow-hidden w-full h-full
                [&>img]:grayscale [&>img]:transition [&>img]:duration-500
                [&>img]:hover:grayscale-0 [&>img]:active:grayscale-0
                [&>img]:hover:scale-125 [&>img]:active:scale-125
            "
        >
            <Link href={`${path}/${id}`}
                  className="_flex-center flex-col gap-y-4 w-full h-full absolute inset-0 z-10"
            >
                <h1 className="text-8xl text-white font-bold drop-shadow-2xl">{title}</h1>
                <h2 className="text-6xl text-white font-normal drop-shadow-2xl">{subtitle}</h2>
            </Link>
            <Image
                src={src}
                alt="배경 이미지"
                unoptimized={true}
                fill
                className="z-1 object-cover"
            />
        </section>
    );
}
