import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PokemonCard from './PokemonCard'
import Button from '@material-ui/core/Button';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      allCards: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3030/api/cards')
    .then(res => res.json())
    .then(data => {
      // console.log(data.cards);
      this.setState({
        allCards: data.cards
      })
    })
  }

  getHp = (hp) => {
    if (hp>100){
      return 100
    } else if (hp<=100) {
      return hp
    } else {
      return 0
    }
  }

  render() {
    const allCards = this.state.allCards
    console.log('card here', allCards);
    return(
      <div>
        <Grid item xs={12}>
          <h1>My Pokedex</h1>
          <Button variant="contained" color="primary">
            Seach for Pokemon
          </Button>
        </Grid>
        <p>
          {allCards.map(card => (
            <p key={card.id}>
              <PokemonCard
                name={card.name}
                hp={this.getHp(card.hp)}
                imgUrl={card.imageUrl}
              />
            </p>
          ))}
        </p>
      </div>
    )
  }
}

export default (Home)
