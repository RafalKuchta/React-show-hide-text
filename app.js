class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageIsActive: false,
            messageIsActive2: false,
            messageIsActive3: false,
        };
        this.messageSetButton = this.messageSetButton.bind(this);
        this.messageSetButton2 = this.messageSetButton2.bind(this);
        this.messageSetButton3 = this.messageSetButton3.bind(this);
    }

    messageSetButton() {
        this.setState({
            messageIsActive: !this.state.messageIsActive
        });
    }

    messageSetButton2() {
        this.setState({
            messageIsActive2: !this.state.messageIsActive2
        });
    }

    messageSetButton3() {
        this.setState({
            messageIsActive3: !this.state.messageIsActive3
        });
    }

    render() {
        const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus beatae esse quam sit vel expedita aperiam, pariatur aspernatur, maiores soluta repellendus aliquam sed incidunt maxime mollitia aut placeat ducimus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus beatae esse quam sit vel expedita aperiam, pariatur aspernatur, maiores soluta repellendus aliquam sed incidunt maxime mollitia aut placeat ducimus!";
        const text2 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus beatae esse quam sit vel expedita aperiam, pariatur aspernatur, maiores soluta repellendus aliquam sed incidunt maxime mollitia aut placeat ducimus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus beatae esse quam sit vel expedita aperiam, pariatur aspernatur, maiores soluta repellendus aliquam sed incidunt maxime mollitia aut placeat ducimus!";
        const text3 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus beatae esse quam sit vel expedita aperiam, pariatur aspernatur, maiores soluta repellendus aliquam sed incidunt maxime mollitia aut placeat ducimus!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum delectus beatae esse quam sit vel expedita aperiam, pariatur aspernatur, maiores soluta repellendus aliquam sed incidunt maxime mollitia aut placeat ducimus!"

        return ( 
          <React.Fragment>
          
          <button onClick = {this.messageSetButton}> {this.state.messageIsActive ? "Ukryj" : "Pokaż"}</button>
          {this.state.messageIsActive && <p>{text}</p>}
           
                     <button onClick = {this.messageSetButton2}> {this.state.messageIsActive2 ? "Ukryj" : "Pokaż"}</button>
          {this.state.messageIsActive2 && <p>{text}</p>}
           
           <button onClick = {this.messageSetButton3}> {this.state.messageIsActive3 ? "Ukryj" : "Pokaż"}</button>
          {this.state.messageIsActive3 && <p>{text}</p>}

          </React.Fragment>
        );

    }
}

ReactDOM.render( < Message / > , document.getElementById("root"))