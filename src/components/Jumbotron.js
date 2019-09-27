import React from 'react';
// import ReactDOM from 'react-dom';


class Jumbotron extends React.Component {
    render() {
        return (
            <div className="container-fluid"> {/* Jumbotron */}
                <div className="jumbotron jumbotron-fluid">
                    <div class="container-fluid alert alert-success alert-dismissible">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <h1>Bootstrap Tutorial</h1>
                        <p>Bootstrap is the most popular HTML, CSS...</p>
                    </div>

                    <div class="container-fluid alert alert-danger alert-dismissible fade show">
                        <button type="button" class="btn btn-primary active btn-block">Button in block actived</button>
                        <button type="button" class="btn btn-secondary btn-block" >Button secondary is disabled</button>
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <button class="btn btn-primary d-block">
                            <span class="spinner-border spinner-border-sm"></span>
                            Loading...
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;
