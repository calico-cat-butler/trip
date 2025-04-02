import { Grid, GridItem } from "@components/layout";
import Section from "./section";

const LIST_DATA = [
    {
        id: "a",
        title: "A안",
        subtitle: "대부도",
        path: "/detail",
        src: "/images/A/bg.jpg"
    },
    {
        id: "b",
        title: "B안",
        subtitle: "제주도",
        path: "/detail",
        src: "/images/B/bg.jpg"
    }
]

export default function List() {
    return (
        <Grid className="without-padding">
            <GridItem mobile={12} tablet={6} desktop={6}>
                <Section
                    id={LIST_DATA[0].id}
                    title={LIST_DATA[0].title}
                    subtitle={LIST_DATA[0].subtitle}
                    path={LIST_DATA[0].path}
                    src={LIST_DATA[0].src}
                />
            </GridItem>
            <GridItem mobile={12} tablet={6} desktop={6}>
                <Section
                    id={LIST_DATA[1].id}
                    title={LIST_DATA[1].title}
                    subtitle={LIST_DATA[1].subtitle}
                    path={LIST_DATA[1].path}
                    src={LIST_DATA[1].src}
                />
            </GridItem>
        </Grid>
    );
}
