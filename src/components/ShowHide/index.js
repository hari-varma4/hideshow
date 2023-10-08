// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {show1: true, show2: true}

  onFirst = () => {
    const {show1} = this.state
    this.setState({show1: !show1})
  }

  onLast = () => {
    const {show2} = this.state
    this.setState({show2: !show2})
  }

  render() {
    const {show1, show2} = this.state
    return (
      <div className="p">
        <h1 className="h"> Show or Hide</h1>
        <div className="bt">
          <div className="c">
            <button className="b" type="button" onClick={this.onFirst}>
              Show/Hide Firstname
            </button>
            {show1 && (
              <div className="jo">
                <p className="pp">Joe</p>
              </div>
            )}
          </div>
          <div className="c">
            <button className="b" type="button" onClick={this.onLast}>
              Show/Hide Lasrtname
            </button>
            {show2 && (
              <div className="jo">
                <p className="pp">Jones</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
