// Token Release Schedule Chart
document.addEventListener('DOMContentLoaded', function() {
    const releaseCtx = document.getElementById('tokenReleaseChart');
    
    if (releaseCtx) {
        // Years array (100 years)
        const years = Array.from({length: 100}, (_, i) => `Year ${i+1}`);
        
        // Total supply in BGL
        const totalSupply = 1000000000000; // 1 trillion BGL
        
        // Annual release percentages based on the tokenomics
        const annualReleasePercentages = [];
        const annualReleaseMillions = [];
        const cumulativeReleaseMillions = [];
        const inflationRate = [];
        
        let cumulativeTotal = 0;
        
        // First decade: Starting with 0.0001% and increasing to 0.001% by year 10
        const startPercent = 0.0001;
        const year10Percent = 0.001;
        
        // Calculate the growth rate for the first decade
        const growthFactor = Math.pow(year10Percent / startPercent, 1/9);
        
        // First decade with exponential growth
        for (let i = 0; i < 10; i++) {
            const currentPercent = i === 0 ? startPercent : annualReleasePercentages[i-1] * growthFactor;
            annualReleasePercentages.push(currentPercent);
            
            const releaseMillions = (currentPercent / 100) * totalSupply / 1000000;
            annualReleaseMillions.push(releaseMillions);
            
            cumulativeTotal += releaseMillions;
            cumulativeReleaseMillions.push(cumulativeTotal);
            
            // Calculate inflation rate (annual release / total circulating supply)
            // Inflation = (New Supply in Year X / Total Circulating Supply in Year X-1) * 100
            const inflationPercent = i === 0 ? 100 : (releaseMillions / cumulativeReleaseMillions[i-1]) * 100;
            inflationRate.push(inflationPercent > 100 ? 100 : inflationPercent);
        }
        
        // Years 11-100: Gradually increasing release
        // Define key points for the curve
        const keyPoints = [
            { year: 10, percent: year10Percent }, // Year 10
            { year: 25, percent: 0.005 },        // Year 25
            { year: 50, percent: 0.01 },         // Year 50
            { year: 75, percent: 0.02 },         // Year 75
            { year: 99, percent: 0.03 }          // Year 100
        ];
        
        for (let i = 10; i < 100; i++) {
            // Find the two key points that this year falls between
            let lowerPoint = keyPoints[0];
            let upperPoint = keyPoints[1];
            
            for (let j = 0; j < keyPoints.length - 1; j++) {
                if (i >= keyPoints[j].year && i < keyPoints[j+1].year) {
                    lowerPoint = keyPoints[j];
                    upperPoint = keyPoints[j+1];
                    break;
                }
            }
            
            // Linear interpolation between the two key points
            const yearRange = upperPoint.year - lowerPoint.year;
            const percentRange = upperPoint.percent - lowerPoint.percent;
            const yearProgress = (i - lowerPoint.year) / yearRange;
            const currentPercent = lowerPoint.percent + (percentRange * yearProgress);
            
            annualReleasePercentages.push(currentPercent);
            
            const releaseMillions = (currentPercent / 100) * totalSupply / 1000000;
            annualReleaseMillions.push(releaseMillions);
            
            cumulativeTotal += releaseMillions;
            cumulativeReleaseMillions.push(cumulativeTotal);
            
            // Calculate inflation rate (annual release / total circulating supply)
            // Inflation = (New Supply in Year X / Total Circulating Supply in Year X-1) * 100
            const inflationPercent = (releaseMillions / cumulativeReleaseMillions[i-1]) * 100;
            inflationRate.push(inflationPercent);
        }
        
        // Create the chart
        new Chart(releaseCtx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Annual Release (Millions BGL)',
                        data: annualReleaseMillions,
                        borderColor: '#00FF9D', // primary
                        backgroundColor: 'rgba(0, 255, 157, 0.1)',
                        tension: 0.4,
                        fill: false,
                        pointBackgroundColor: '#00FF9D',
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Total Supply in Circulation (Millions BGL)',
                        data: cumulativeReleaseMillions,
                        borderColor: '#4DEEEA', // secondary
                        backgroundColor: 'rgba(77, 238, 234, 0.1)',
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: '#4DEEEA',
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        yAxisID: 'y1'
                    },
                    {
                        label: 'Inflation Rate (%)',
                        data: inflationRate,
                        borderColor: '#FF10F0', // accent1
                        backgroundColor: 'rgba(255, 16, 240, 0.1)',
                        tension: 0.4,
                        fill: false,
                        pointBackgroundColor: '#FF10F0',
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        yAxisID: 'y2',
                        hidden: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Annual Release (Millions BGL)',
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Total in Circulation (Millions BGL)',
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        },
                        grid: {
                            drawOnChartArea: false,
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    y2: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        beginAtZero: true,
                        max: 20, // Cap at 20% for better visibility
                        title: {
                            display: true,
                            text: 'Inflation Rate (%)',
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        },
                        grid: {
                            drawOnChartArea: false,
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            },
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: function(context) {
                                // Make grid lines for decade markers more prominent
                                if (context.tick && context.tick.label && context.tick.label.includes('Year') && parseInt(context.tick.label.replace('Year ', '')) % 10 === 0) {
                                    return 'rgba(255, 255, 255, 0.3)';
                                }
                                return 'rgba(255, 255, 255, 0.1)';
                            },
                            tickBorderDash: function(context) {
                                // Make grid lines for decade markers solid
                                if (context.tick && context.tick.label && context.tick.label.includes('Year') && parseInt(context.tick.label.replace('Year ', '')) % 10 === 0) {
                                    return [];
                                }
                                return [5, 5];
                            }
                        },
                        ticks: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 10
                            },
                            maxRotation: 0,
                            autoSkip: false,
                            callback: function(value, index) {
                                // Show decade markers prominently
                                if ((index + 1) % 10 === 0) {
                                    return 'Year ' + (index + 1);
                                }
                                // Show intermediate year markers with smaller font
                                return '';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            },
                            padding: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.datasetIndex === 2) {
                                    // Inflation rate
                                    label += context.parsed.y.toFixed(2) + '%';
                                } else {
                                    // Release or cumulative in millions
                                    label += context.parsed.y.toFixed(2) + ' M';
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }
});
