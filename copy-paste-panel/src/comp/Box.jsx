import React, {Component} from 'react';
import '../main.css';

class Box extends Component {

    copyToClipBoard () {
        console.log(this.props.text);
        navigator.clipboard.writeText(this.props.text);
    }

    render() {
        return(
            <div className="box" onClick={ () => this.copyToClipBoard() }>
                {/* <img src={this.props.picture}></img> */}
                <i className={this.props.picture + ' fa-2x'} style={{color: this.props.color}}></i>
                <p className="label">{this.props.label}</p>
                {!this.props.bigText && (<span className="tooltip">{this.props.text}</span>)}
                {this.props.bigText && (<span className="tooltip tooltip_big">{this.props.text}</span>)}
            </div>
        )
    }

}

export default Box;