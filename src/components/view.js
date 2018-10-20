import React from 'react';
import axios from 'axios';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import { red100, blue100 } from 'material-ui/styles/colors';

class view extends React.Component{

    state={
        data:[],
        image: [],
        geners: []
    };
    
    componentDidMount () {
        let id = (this.props.match.url).substr(6)
        console.log('id',id);
        axios.get(`http://api.tvmaze.com/shows/${id}`).then(res => {
            this.setState({data2: this.props})
            console.log('rrr', this.props);
            console.log('reee', res);
            this.setState({data: res.data})
            this.setState({image: res.data.image})
            console.log('fff', res.data);
            console.log('qqq',this.state.data); 
            });
        }
        
    
    render(){
        return(
            <div className="App" style={{backgroundColor:blue100, }}>
                <Card style={{margin:50}}>
                    <img src={this.state.image.medium} alt=""></img><br></br>
                    <h3>Show Name:- </h3> <h5>{this.state.data.name}</h5><br></br>
                    <hr></hr>
                    <a href={this.state.data.url}>Link to website</a>
                    <h3>Show Status:- </h3> <h5> {this.state.data.status}</h5><br></br>
                    <h3>Show Summary:- </h3> <h5> {this.state.data.summary}</h5><br></br>
                </Card>
            </div>        
        )
        }
    }

export default view;