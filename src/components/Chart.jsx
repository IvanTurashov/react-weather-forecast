import React, { Component } from 'react';
import Chart from 'chart.js';
import styled from 'react-emotion';
import moment from 'moment';

const Container = styled('canvas')`
  
`;

class ChartWeather extends Component {
    constructor(props) {
        super(props);

        this.chart = null;
    }

    componentDidMount() {
        this.build();
    }

    componentDidUpdate(prevProps) {
        this.build();
    }

    componentWillUnmount() {
        this.chart.destroy();
    }

    build() {
        const { data } = this.props;
        const ctx = this.chart.getContext('2d');

        this.chart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                emptyText: 'Нет данных',
                withoutLabel: true,
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        title: (tooltipItems, data) => {
                            const idx = tooltipItems[0].index;
                            return moment.unix(data.labels[idx]).format('Do')
                        },
                        label: (tooltipItem, data) => 'Лабель'
                           // `${data.datasets[tooltipItem.datasetIndex].label}: ${isNaN(tooltipItem.yLabel) ? 'Нет данных' : tooltipItem.yLabel}`
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            callback: (value) => moment.unix(value).format('DD')
                        }
                    }]
                }
            }
        });
    }

    render() {
        return (
            <canvas
                id="chart"
                ref={node => this.chart = node}
            />
        );
    }
}

export default ChartWeather;