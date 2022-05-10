import {useSelector} from "react-redux";
import {CoffeeCard} from "../Card/CoffeeCard";
import  styles from "./List.module.css";
import {Typography} from "@mui/material";

export const List = () => {
    const {coffee} = useSelector(state => state)

    return (
        <>
            {
                coffee.length > 0
                    ? <div className={styles.list}>
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
                    :<div className={styles.empty}>
                        <Typography variant="h5" gutterBottom component="div">
                            список кофе пуст(
                        </Typography>
                    </div>
            }
        </>


    );
};
