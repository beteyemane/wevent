import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class EventsShow extends React.Component {

  constructor() {
    super()

    this.state = {
      event: []

    }
  }

  componentDidMount() {
    //this will be this.props.match.params.town.id
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/${this.props.match.params.id}`, {
      params: {
        api_key: '0c64ae5cca7903c86353520198c58021'
      }
    })
      .then(response => this.setState({event: response.data.results}))
  }

  render(){
    console.log(this.state.event)
    const { eventname, date, description, largeimageurl, entryprice, openingtimes, link} = this.state.event
    console.log(link)
    return(
      <section className="section">
        <div className="container event-show">
          <h1 className="title is-1">{eventname}</h1>
          <hr />

          <div className="columns row">
            <div className="column">
              <figure className="image">
                <img src={largeimageurl} alt={eventname} />
              </figure>
            </div>
            <h4 className="title is-4">{}</h4>
            <p>{description}</p>
            <br/>
            <div className="details">
              <div>
                <h3><span>Date:</span> {date}</h3>
                <h3><span>Price:</span> {entryprice}</h3>
              </div>
              <a href={link} target='_blank' rel='noopener noreferrer' className="button" id="seeMore">
              See More
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default EventsShow
