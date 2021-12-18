import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeesAddForm from '../../employeers-add-form/employeers-add-form';
import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
             data: [
                {
                    name: 'Sanya',
                    salary: 800,
                    increase: false,
                    id: 1,
                    rise: true,
                },
                {
                    name: 'Lox',
                    salary: 8400,
                    increase: false,
                    id: 2,
                    rise: false,
                },
                {
                    name: 'pIdr',
                    salary: 4440,
                    increase: true,
                    id: 3,
                    rise: false,
                },        {
                    name: 'SsS',
                    salary: 3330,
                    increase: false,
                    id: 4,
                    rise: false,
                },
            ]
        
        }
        this.maxId = 4;
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    

    onAdd = (name, salary) => {
        this.setState(({data}) => {
            return {
                data: [
                    ...data,
                    {
                        name: name,
                        salary: salary,
                        increase: false,
                        id: ++this.maxId,
                        rise: false,
                    }
                ]
            }
        })
      }
    
    workers = () => {
        return this.state.data.length;
    }

    increased = () => {
        return this.state.data.filter(item => item.increase).length;
    }

    // onToggleIncrease = (id) => {
    //     // this.setState(({data}) => {
    //     //     const index = data.findIndex(elem => elem.id === id);
    //     //     const old = data[index]; 
    //     //     const newItem = {...old, increase: !old.increase};
    //     //     const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //     //     return {
    //     //         data: newArray
    //     //     }
    //     // })
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, increase: !item.increase}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        return (
            <div className="app">
                <AppInfo 
                workers={this.workers}
                increased={this.increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeersList 
                data={this.state.data}
                onDelete={this.onDelete}
                onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                onAdd={this.onAdd}/>
            </div>
        );
    }
}

export default App;