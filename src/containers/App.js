import React, { Component } from 'react';
import fetchData from '../api.js';
import QueryForm from '../containers/QueryForm.js';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import iterator from '../utils/iterator.js';
import './App.css';

class App extends Component {
    state = {
        query: "",
        fromYear: "",
        toYear: "",
        pageSize: "",
        results: []
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const queryRef = document.getElementById('query').value;
        const fromYearRef = document.getElementById('fromYear').value;
        const toYearRef = document.getElementById('toYear').value;
        const pageSizeRef = document.getElementById('pageSize').value;

        if (queryRef &&
            fromYearRef &&
            toYearRef &&
            pageSizeRef
           )
        {
            this.setState({
                query: queryRef,
                fromYear: fromYearRef,
                toYear: toYearRef,
                pageSize: pageSizeRef
            }, () => {
                fetchData(
                    this.state.query,
                    this.state.fromYear,
                    this.state.toYear,
                    this.state.pageSize
                ).then(response =>
                       this.setState({
                           results: response.resultList.result
                       }));
            });
        }
        else {
            alert("Please Enter all Necassary Values");
        }
    }
    render() {
        const yearList = [...(iterator(this.state.results).keys())];
        const countList = [...(iterator(this.state.results).values())];

        const options = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Papers Found in Particular Year'
            },
            xAxis: {
                categories: yearList
            },
            yAxis: {
                title: {
                    text: 'Count Range'
                }
            },
            series: [{
                name: 'Year Range',
                data: countList
            }],
        };

        return (
            <div className="App">
              <QueryForm handleSubmit={this.handleSubmit}/>
              {
                  this.state.results.length !== 0
                      ? (
                          <div className="highchart-container">
                            <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                            />
                          </div>
                          
                      )
                      : (
                          null
                      )
              }
            </div>
        );
    }
}

export default App;
          
