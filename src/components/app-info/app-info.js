import './app-info.css';
import { Component } from 'react';

class AppInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {workers, increased} = this.props;
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании DOSKI</h1>
                <h2>Общее число сотрудников: {workers()}</h2>
                <h2>Премию получат: {increased()}</h2>
            </div>
        )
    }
}

export default AppInfo;