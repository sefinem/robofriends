import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            search: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(robots => this.setState({ robots: robots }));
    }

    onSearch = (e) => {
        this.setState({ search: e.target.value });
    }

    render() {
        const filteredRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.search.toLowerCase())
        });

        if (this.state.robots.length === 0) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox onSearch={this.onSearch} />
                    <Scroll>
                        <CardList robots={filteredRobot} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;