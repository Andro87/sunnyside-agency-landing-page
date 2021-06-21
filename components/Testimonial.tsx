import { ReactNode } from "react";
import styles from "./Testimonial.module.scss";

interface Props {
    readonly picture: ReactNode;
    readonly info: string;
    readonly name: string;
    readonly position: string;
}
const Testimonial: React.FunctionComponent<Props> = props => {
    const { picture, info, name, position } = props;
    return (
        <div className={styles.testimonial}>
            {picture}
            <p>{info}</p>
            <div className={styles.details}>
                <h4>{name}</h4>
                <p>{position}</p>
            </div>
        </div>
    );
};
export default Testimonial;
