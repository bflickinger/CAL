import React from 'react'
import { Link } from 'react-router-dom'

const Results = props => (
    <li className="card border-info mb-3">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
            <p className="card-text">{props.description}</p>
            <p className="card-text">Author: <strong>{props.author}</strong></p>
            {/* <button className="btn btn-primary">Reply</button> */}
            <Link to={"/story/" + props.id}  className="btn btn-primary" role="button">Reply</Link>
        </div>
    </li>
)

export default Results