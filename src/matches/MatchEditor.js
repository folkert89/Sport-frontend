import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './MatchEditor.css'
import createMatch from '../actions/matches/create'

const TYPES = [
  'open',
  'closed'
]

class MatchEditor extends PureComponent {
  constructor(props) {
    super()

    const { title, date, summary, open, closed, players, location, photo } = props

    this.state = {
      title,
      summary,
      date,
      open,
      closed,
      players,
      location,
      photo,
    }
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      title: this.refs.title.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: this.refs.photo.value
    })
  }

  updatePlayers(event) {
    this.setState({
      players: this.refs.players.value
    })
  }

  updateIntro(text, medium) {
    this.setState({
      summary: text
    })
  }

  updateDate(event) {
    this.setState({
      date: this.refs.date.value
    })
  }

  setType(event) {
    this.setState({
      open: event.target.value === 'open',
      closed: event.target.value === 'closed',
    })
  }

  saveMatch() {
    const {
      title,
      summary,
      open,
      closed,
      players,
      location,
      date,
      photo,
    } = this.state

    const match = {
      title,
      summary: toMarkdown(summary),
      open,
      closed,
      date,
      players,
      location,
      joined: false,
      photo,
    }

    this.props.createMatch(match)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Title"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyDown={this.updateTitle.bind(this)} />

        <Editor
          ref="summary"
          options={{
            placeholder: {text: 'Describe event...'}
          }}
          onChange={this.updateIntro.bind(this)}
          text={this.state.summary} />

        <input
          type="text"
          ref="photo"
          className="photo"
          placeholder="Photo URL"
          defaultValue={this.state.photo}
          onChange={this.updatePhoto.bind(this)}
          onKeyDown={this.updatePhoto.bind(this)} />

        <input
          type="date"
          ref="date"
          className="date"
          placeHolder="Date"
          defaultValue={new Date().toISOString().slice(0,10)}
          onChange={this.updateDate.bind(this)}
          onKeyDown={this.updateDate.bind(this)} />

        <input
          type="number"
          ref="players"
          className="players"
          placeholder="Amount of players"
          defaultValue={this.state.players}
          onChange={this.updatePlayers.bind(this)}
          onKeyDown={this.updatePlayers.bind(this)} />

        {TYPES.map((type) => {
          return <label key={type} htmlFor={type}>
            <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)} />
            {type}
          </label>
        })}

        <div className="actions">
          <button className="primary" onClick={this.saveMatch.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { createMatch })(MatchEditor)
