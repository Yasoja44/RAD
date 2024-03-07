import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function SimpleCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    be
                    {bull}
                    nev
                    {bull}o{bull}
                    lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);