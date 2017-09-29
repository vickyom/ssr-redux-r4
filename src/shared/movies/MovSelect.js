import React, { PropTypes } from "react";

class MovSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(events) {
        console.log(events.target.value);
        this.props.onSelectYear(events.target.value);
    }

    render() {
        return (
            <select onChange={e => this.handleChange(e)} className="list-group">
                {this.props.movYear.map(yer => (
                    <option className="list-group-item" value={yer} key={yer}>
                        {" "}
                        {yer}{" "}
                    </option>
                ))}
            </select>
        );
    }
}

MovSelect.propTypes = {
    movYear: PropTypes.array.isRequired
};

export default MovSelect;
