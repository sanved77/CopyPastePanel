import React, {Component} from 'react';
import '../main.css';
import Box from './Box.jsx';

class Panel extends Component {

    render() {
        return(
            <div>
                <h2 className="headings">{this.props.data.label}</h2>
                <div className="link_box">
                    {this.props.data.tabs.map((entry, i) => (
                        <Box key={i} label={entry.label} picture={entry.picture} text={entry.text} color={entry.color} bigText={entry.bigText}></Box>
                    ))}
                </div>
            </div>
        )
    }
}

export default Panel;