import {Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import styles from './CoffeeCard.module.css';
import coffeeImg from '../../image/coffee.jpg';

export const CoffeeCard = ({name, notes, origin}) => {

    return (
            <Card sx={{ maxWidth: 300}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={coffeeImg}
                    alt="coffee"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{marginBottom: 1.5}}>
                        {origin}
                    </Typography>
                    <CardActions sx={{padding: 0}}>
                        <Stack className={styles.stack} direction="row" >
                            {
                                notes.split(",").map(note => (
                                    <Chip
                                        key={uuidv4()}
                                        className={styles.chip}
                                        label={note}
                                        color="success"
                                    />))
                            }
                        </Stack>
                    </CardActions>
                </CardContent>
            </Card>
    );
};

