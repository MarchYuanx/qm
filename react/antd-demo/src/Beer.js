import React, { Component } from "react";
import Results from "./Results";
import Search from "./Search";
class Beer extends Component {

    componentDidMount(){
        this.loadBeers();
    }
    componentDidUpdate(prevProps){
        const currentSearchTerm=this.props.match.params.searchTerm;
        const oldSearchTerm = prevProps.match.params.searchTerm;
        if(currentSearchTerm!==oldSearchTerm){
            this.loadBeers(currentSearchTerm);
        }
        
    }
    state = {
        beers: [],
        loading: true
    }
    loadBeers=(searchTerm="hops")=>{
        this.setState({
            loading:true
        })
        const loaclStorageBeers=localStorage.getItem(`search-${searchTerm}`);
        if(loaclStorageBeers){
            const localBeers=JSON.parse(loaclStorageBeers);
            return this.setState({
                beers:localBeers,
                loading:false
            })
        }
        // fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
        //     .then(data=>data.json())
        //     .then(data=>{
        //         console.log(data);
        //         const beers=data.data||[];
        //         this.setState({
        //             beers,
        //             loading:false
        //         })
        //localStorage.setItem(`search-${searchTerm}`, JSON.stringify());
        //     })
        //     .catch(err=>console.log(err));
        
    }
    render() {
        return (
            <div className="wrapper">
                <Search  />
                <Results beers={ this.state.beers } loading={ this.state.loading }></Results>
            </div>
        );
    }
}
export default Beer;

