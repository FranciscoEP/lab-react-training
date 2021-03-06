import React, { Component } from 'react'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import RandomNumber from './components/RandomNumber'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice'

class App extends Component {
  state = {
    counter: 0,
    imgChange: true,
    diceState: '/img/dice-empty.png',
  }

  increment = () => {
    const { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  changeImg = () => {
    this.setState({ imgChange: !this.state.imgChange })
  }

  changeDice = () => {
    let random = Math.floor(Math.random() * (6 - 1) + 1)
    let imageUrl = `/img/dice${random}.png`

    this.setState({ diceState: imageUrl })
  }

  render() {
    return (
      <div className="App">
        <h1>Id Card</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={'1992-07-14'}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={'1988-05-11'}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <h1>Greetings</h1>
        <Greetings language="fr" children=" nina" />
        <Greetings language="es" children="amigo" />
        <h1>Random Numbers</h1>
        <RandomNumber min={1} max={6} />
        <RandomNumber min={1} max={100} />
        <h1>Box Color</h1>
        <BoxColor r={100} g={100} b={100} />
        <BoxColor r={200} g={200} b={200} />
        <h1>Credit Card</h1>
        <CreditCard
          type="/img/visa.png"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="/img/master-card.svg"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="/img/visa.png"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
        <h1>Ratings</h1>
        <Rating rate={0} />
        <Rating rate={1} />
        <Rating rate={2} />
        <Rating rate={3} />
        <Rating rate={4} />
        <Rating rate="5" />
        <h1>Driver's License</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
        <h1>Clickable button</h1>
        <LikeButton increment={this.increment} counter={this.state.counter} />

        <h1>Clickable Picture</h1>
        <ClickablePicture
          changeImg={this.changeImg}
          imgChange={this.state.imgChange}
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />

        <h1>Dice</h1>
        <Dice diceState={this.state.diceState} changeDice={this.changeDice} />
      </div>
    )
  }
}

export default App
