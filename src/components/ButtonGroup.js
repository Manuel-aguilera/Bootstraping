import React from 'react';
// import ReactDOM from 'react-dom';

class ButtonGroup extends React.Component {
    render() {
        return (
            <div class="container-fluid"> {/* Jumbotron */}
                <div class="jumbotron jumbotron-fluid text-center">
                    <h2>The most beautiful buttons</h2>
                    <div class="btn-group">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                Android
                            </button>
                            <div class="dropdown-menu">
                                <a href="/" class="dropdown-item">Marsmallow</a>
                                <a href="/" class="dropdown-item">Nougat</a>
                                <a href="/" class="dropdown-item">Oreo</a>
                                <a href="/" class="dropdown-item">Pie</a>
                                <a href="/" class="dropdown-item">Android 10.0</a>
                            </div>
                        </div>
                        <button class="btn btn-primary">Symbian</button>
                        <button class="btn btn-primary">Windows phone OS</button>
                        <button class="btn btn-primary">Firefox</button>
                        <button class="btn btn-primary">Harmony OS</button>
                        <div class="btn-group">
                            <button class="btn btn-primary">IOS</button>
                            <button class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                <span class="caret"></span>
                            </button>
                            <div class="dropdown-menu">
                                <a href="/" class="dropdown-item">IOS 7</a>
                                <a href="/" class="dropdown-item">IOS 8</a>
                                <a href="/" class="dropdown-item">IOS 9</a>
                                <a href="/" class="dropdown-item">IOS 10</a>
                                <a href="/" class="dropdown-item">IOS 11</a>
                            </div>
                        </div>

                    </div> {/*Fin Button-group*/}
                </div>
            </div> 
        );
    }
}

export default ButtonGroup;
