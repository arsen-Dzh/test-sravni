import {useSelector} from "react-redux";
import {CoffeeCard} from "../Card/CoffeeCard";
import  styles from "./List.module.css";

export const List = () => {
    const {coffee} = useSelector(state => state)

    return (
        <div className={styles.list}>
            {
                coffee.map(item => (
                    <CoffeeCard
                        key={item["id"]}
                        name={item["blend_name"]}
                        notes={item["notes"]}
                        origin={item["origin"]}
                    />))
            }
        </div>
    );
};
