import { ReactNode } from "react";
import styles from "./Introduction.module.scss";

interface Props {
    readonly order?: string;
    readonly image: ReactNode;
    readonly header: string;
    readonly paragraph: string;
    readonly color: string;
}
const Introduction: React.FunctionComponent<Props> = props => {
    const { order, image, header, paragraph, color } = props;
    return (
        <div className={`${styles.main_intro} ${styles[order]}`}>
            <div className={styles.section_image}>{image}</div>
            <div className={styles.section_detail}>
                <div className={styles.detail_wrap}>
                    <h2> {header}</h2>

                    <p>{paragraph}</p>

                    <a href="#" className={styles[color]}>
                        LEARN MORE
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Introduction;
