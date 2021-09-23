import { ReactNode } from "react";
import styles from "./Testimonial.module.scss";

interface Props {
    readonly picture: ReactNode;
    readonly info: string;
    readonly name: string;
    readonly job: string;
}
const Testimonial: React.FunctionComponent<Props> = props => {
    const { picture, info, name, job } = props;
    return (
        <div className={styles.testimonial}>
            {picture}
            <p>{info}</p>
            <div className={styles.wrap}>
                <h5>{name}</h5>
                <p>{job}</p>
            </div>
        </div>
    );
};
export default Testimonial;
