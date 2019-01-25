import React, { Component } from 'react';
import Chart from '../../../node_modules/chart.js/src/chart';
import moment from 'moment';

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
            type: 'bar',
            data: data,
            options: {
                animation: {
                    duration: 0,
                    onComplete() {
                        const chartInstance = this.chart;
                        const ctx = chartInstance.ctx;
                        ctx.textAlign = 'center';
                        ctx.fillStyle = '#666';
                        ctx.textBaseline = 'bottom';

                        this.data.datasets.forEach((dataset, i) => {
                            const meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach((bar, index) => {
                                const data = dataset.data[index];
                                const offset = data > 0 ? 2 : -16;
                                ctx.fillText(data, bar._model.x, bar._model.y - offset);
                            });
                        });
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom'
                },
                emptyText: 'Нет данных',
                withoutLabel: true,
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    enabled: false
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            callback: (value) => moment.unix(value).format('DD')
                        }
                    }],
                    yAxes: [{
                        display: false
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