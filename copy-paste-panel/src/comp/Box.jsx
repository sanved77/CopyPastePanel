import React, {Component} from 'react';
import '../main.css';

class Box extends Component {

    copyToClipBoard () {
        const input = document.createElement('textarea');
        document.body.appendChild(input);
        input.innerHTML = this.props.text;
        input.style.position = "absolute";
        input.style.left = "-999px";
        input.style.top = "0";
        input.focus();
        input.select();
        const result = document.execCommand('copy');
        if (result === 'unsuccessful') {
            console.error('Failed to copy text.');
        }
    }

    render() {
        return(
            <div className="box" onClick={ () => this.copyToClipBoard() }>
                <i className={this.props.picture + ' fa-2x'} style={{color: this.props.color}}></i>
                <p className="label">{this.props.label}</p>
                {!this.props.bigText && (<span className="tooltip">{this.props.text}</span>)}
                {this.props.bigText && (<span className="tooltip tooltip_big">{this.props.text}</span>)}
            </div>
        )
    }

}

export default Box;