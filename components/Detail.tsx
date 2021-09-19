import { ReactNode } from "react";
import styles from "./Detail.module.scss";

interface Props {
    readonly image: ReactNode;
    readonly header: string;
    readonly paragraph: string;
    readonly color: string;
}
const Detail: React.FunctionComponent<Props> = props => {
    const { image, header, paragraph, color } = props;
    return (
        <div className={styles.detail_container}>
            {image}

            <div className={`${styles.info_wrap} ${styles[color]}`}>
                <h3>{header}</h3>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};
export default Detail;
