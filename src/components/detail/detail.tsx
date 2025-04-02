"use client";

import { usePathname, useRouter } from "next/navigation";
import { Grid, GridItem } from "@components/layout";
import { ResponsiveSwiper } from "@components/common";
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'lottie-react';
import catLoading from "@json/cat-loading.json";
import images from "@data/images.json";
import metadata from "@data/metadata.json";
import Section from "./section";

export default function Detail() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <>
            {(pathname.includes("/detail/a") ? (
                <>
                    <Grid>
                        <GridItem mobile={12} tablet={8} desktop={8}>
                            <ResponsiveSwiper data={images.images} />
                        </GridItem>
                        <GridItem mobile={12} tablet={4} desktop={4}>
                            <div className="flex justify-start items-start px-4 py-12 md:h-screen md:p-0 md:justify-center md:items-center">
                                <div className="flex flex-col">
                                    <Section
                                        title={metadata?.title}
                                        path={metadata?.path}
                                        location={metadata?.location}
                                        price={metadata?.price}
                                        summary={metadata?.summary}
                                    />
                                </div>
                            </div>
                        </GridItem>
                    </Grid>
                </>
            ) : (
                <>
                    <div className="_flex-center flex-col gap-y-4 flex-1">
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                '서비스 준비 중입니다.',
                                1000,
                                '뒤로 가기를 눌러주세요.',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em', fontWeight: 'bold', textAlign: 'center' }}
                            repeat={Infinity}
                        />

                        <Lottie animationData={catLoading} />

                        <button type="button" className="_enter-button" onClick={() => router.back()}>뒤로 가기</button>
                    </div>
                </>
            ))}
        </>
    );
}
