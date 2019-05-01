import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';

import '../css/styles.css'



const PokemonCard = ({name, hp, str, weak, level, imgUrl}) => {
  return (
    <div class="container">
      <Card className="card">
        <CardContent>
        <Grid flex container spacing={24}>
            <Grid item xs={6}>
              <img src={imgUrl}/>
            </Grid>
            <Grid item xs={6}>
              {name}
              <li>HP: {hp}</li>
              <li>Str: {str}</li>
              <li>Weak: {weak}</li>
            </Grid>
        </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default (PokemonCard)
