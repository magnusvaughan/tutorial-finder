import React from 'react';
import ReactDOM from 'react-dom';


class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tutorials: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch("http://tutorial-finder.test/tutorial")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              tutorials: result.data
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {


        if(!this.state.isLoaded) {
            return(
                <h1>Loading...</h1>
            )
        }

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        
                    {this.state.tutorials.map((tutorial) =>
                        <div className="card">
                            <div className="card-header">{tutorial.name}</div>
    
                            <div className="card-body">{tutorial.description}</div>
                        </div>
                    )};
                    </div>
                </div>
            </div>
        );
    }
  }

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
